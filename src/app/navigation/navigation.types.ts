import { InjectionToken, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, combineLatestWith, filter, map } from 'rxjs';

/**
 * Route data structure
 */
export type BaseNavigationRouteData = {
  name: string;
  description: string;
};

export type RelatedProfilesData = BaseNavigationRouteData & {
  position?: string;
  contact?: string;
};

export type AccountsGroupsData = BaseNavigationRouteData & {
  accounts?: string[];
};

export type ContractsData = BaseNavigationRouteData & {
  type?: string;
  amount?: number;
};

export type SymbolsGroupsData = BaseNavigationRouteData & {
  symbols?: string[];
};

export type NavigationRouteData =
  | RelatedProfilesData
  | AccountsGroupsData
  | ContractsData
  | SymbolsGroupsData;

export type NavigationRoute = {
  /**
   * Route title, used for display in navigation and breadcrumbs
   */
  title: string;

  /**
   * Route path, used for opening the route
   */
  path: string;

  /**
   * Route icon, used for display in navigation, fill only for first level routes
   */
  icon?: string;

  /**
   * Child routes, used for displaying nested routes
   */
  children?: NavigationRoute[];

  data?: NavigationRouteData[];
};

/**
 * Enhanced structure of navigation route
 */
export type EnhancedNavigationRoute = NavigationRoute & {
  /**
   * Parent route, used for simplifying the walking of the route tree
   */
  parent?: EnhancedNavigationRoute | null;

  /**
   * Enhanced child routes, used for displaying nested routes
   */
  children?: EnhancedNavigationRoute[];

  active?: boolean;
};

/**
 * Token that provides all available routes for navigation
 */
export const NavigationRoutes = new InjectionToken<NavigationRoute[]>(
  `Navigation Routes`
);

/**
 * Enhancement function type for navigation routes
 */
export type NavigationEnhancement = (
  routes: Observable<NavigationRoute[]>
) => Observable<EnhancedNavigationRoute[]>;

/**
 * Token that provides all available enhancements for navigation routes
 */
export const NAVIGATION_ENHANCEMENTS = new InjectionToken<
  NavigationEnhancement[]
>(`Navigation Enhancements`, {
  factory: (): NavigationEnhancement[] => {
    const router = inject(Router);

    return [
      // enhancement: adding parent to children
      (routes: Observable<NavigationRoute[]>) => {
        return routes.pipe(
          map((routes) => setParentsForChildren(routes, null))
        );
      },

      // enhancement: adding active state to routes
      (routes: Observable<NavigationRoute[]>) => {
        const routeIsChanged = router.events.pipe(
          filter((event) => event instanceof NavigationEnd)
        );

        return routes.pipe(
          combineLatestWith(routeIsChanged),
          map(([routes]) => setRouteActiveState(routes, router))
        );
      },
    ];
  },
});

export function setRouteActiveState(
  routes: NavigationRoute[],
  router: Router
): EnhancedNavigationRoute[] {
  return routes.map((route) => {
    const enhancedRoute: EnhancedNavigationRoute = {
      ...route,
      active: router.isActive(route.path, {
        paths: 'subset',
        matrixParams: 'ignored',
        queryParams: 'ignored',
        fragment: 'ignored',
      }),
    };

    if (route.children) {
      enhancedRoute.children = setRouteActiveState(route.children, router);
    }

    return enhancedRoute;
  });
}

export function setParentsForChildren(
  routes: NavigationRoute[],
  parent: EnhancedNavigationRoute | null
): EnhancedNavigationRoute[] {
  return routes.map((route) => {
    const enhancedRoute: EnhancedNavigationRoute = {
      ...route,
      parent,
    };

    if (route.children) {
      enhancedRoute.children = setParentsForChildren(
        route.children,
        enhancedRoute
      );
    }

    return enhancedRoute;
  });
}

/**
 * Abstract navigation service, used to provide navigation data
 *
 * TODO: You need to implement this class
 */
export abstract class NavigationServiceBase {
  /**
   * Returns enhanced navigation data
   */
  abstract getRoutes(): Observable<EnhancedNavigationRoute[]>;

  /**
   * Returns enhanced navigation data for the specified path
   */
  abstract getRoute(
    routeUrl: string
  ): Observable<EnhancedNavigationRoute | null>;

  abstract getRouteData(
    routeUrl: string
  ): Observable<NavigationRouteData[] | undefined>;

  /**
   * Returns breadcrumbs for the specified path, the result is an array of routes starting with the parent and ending with the current one
   */
  // Accounts and Symbols / Accounts / Related profiles
  abstract getBreadcrumbs(
    routeUrl: string
  ): Observable<EnhancedNavigationRoute[] | null>;
}
