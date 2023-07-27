import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Route data structure
 */
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
   * Enchaced child routes, used for displaying nested routes
   */
  children?: EnhancedNavigationRoute[];
};

/**
 * Token that provides all available routes for navigation
 */
export const NavigationRoutes = new InjectionToken<NavigationRoute[]>(
  `Navigation Routes`,
  {
    providedIn: 'root',
    factory: (): NavigationRoute[] => [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: '/assets/sprites.svg#dashboard',
      },
      {
        title: 'Accounts and Symbols',
        path: '/accounts-and-symbols',
        icon: '/assets/sprites.svg#section-accounts-and-symbols',
        children: [
          {
            title: 'Accounts',
            path: '/accounts-and-symbols/accounts',
            icon: '/assets/sprites.svg#account',
            children: [
              {
                title: 'Find Account',
                path: '/accounts-and-symbols/accounts',
                icon: '/assets/sprites.svg#search-small',
              },
              {
                title: 'Related Profiles',
                path: '/accounts-and-symbols/accounts/related-profiles',
              },
              {
                title: 'Accounts Groups',
                path: '/accounts-and-symbols/accounts/accounts-groups',
              },
            ],
          },
          {
            title: 'Symbols',
            path: '/accounts-and-symbols/symbols',
            icon: '/assets/sprites.svg#symbol',
            children: [
              {
                title: 'Find Symbol',
                path: '/accounts-and-symbols/symbols',
                icon: '/assets/sprites.svg#search-small',
              },
              {
                title: 'Contracts',
                path: '/accounts-and-symbols/symbols/contracts',
              },
              {
                title: 'Symbols Groups',
                path: '/accounts-and-symbols/symbols/symbols-groups',
              },
            ],
          },
        ],
      },
    ],
  }
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
  factory: (): NavigationEnhancement[] => [
    // TODO: You need to implement the enhancement of navigation data and put it in this array
  ],
});

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

  /**
   * Returns breadcrumbs for the specified path, the result is an array of routes starting with the parent and ending with the current one
   */
  // Accounts and Symbols / Accounts / Related profiles
  abstract getBreadcrumbs(
    routeUrl: string
  ): Observable<EnhancedNavigationRoute[] | null>;
}
