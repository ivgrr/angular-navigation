import { Inject, Injectable } from '@angular/core';
import { Observable, OperatorFunction, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import {
  EnhancedNavigationRoute,
  NAVIGATION_ENHANCEMENTS,
  NavigationEnhancement,
  NavigationRoute,
  NavigationRoutes,
  NavigationServiceBase,
} from './navigation.types';

const enchanceRoutes =
  (
    enchanements: NavigationEnhancement[]
  ): OperatorFunction<NavigationRoute[], EnhancedNavigationRoute[]> =>
  (
    source: Observable<NavigationRoute[]>
  ): Observable<EnhancedNavigationRoute[]> => {
    for (const enhancement of enchanements) {
      source = enhancement(source);
    }
    return source;
  };

@Injectable()
export class NavigationService extends NavigationServiceBase {
  private enhancedRoutes: Observable<EnhancedNavigationRoute[]>;

  constructor(
    @Inject(NavigationRoutes)
    private navigationRoutes: NavigationRoute[],
    @Inject(NAVIGATION_ENHANCEMENTS)
    private navigationEnhancements: NavigationEnhancement[]
  ) {
    super();

    this.enhancedRoutes = of(this.navigationRoutes).pipe(
      enchanceRoutes(this.navigationEnhancements),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  private setParentsForChildren(
    routes: NavigationRoute[],
    parent: EnhancedNavigationRoute | null
  ): EnhancedNavigationRoute[] {
    return routes.map((route) => {
      const routeWithParent = { ...route, parent };
      if (route.children) {
        routeWithParent.children = this.setParentsForChildren(
          route.children,
          routeWithParent
        );
      }
      return routeWithParent;
    });
  }

  public override getRoutes(): Observable<EnhancedNavigationRoute[]> {
    return this.enhancedRoutes;
  }

  public override getRoute(
    routeUrl: string
  ): Observable<EnhancedNavigationRoute | null> {
    return this.getRoutes().pipe(
      map((routes) => this.findRouteByPath(routes, routeUrl))
    );
  }

  public override getBreadcrumbs(
    routeUrl: string
  ): Observable<EnhancedNavigationRoute[] | null> {
    return this.getRoute(routeUrl).pipe(
      map((route) => {
        const breadcrumbs: EnhancedNavigationRoute[] = [];

        if (!route) return null;

        let currentRoute: EnhancedNavigationRoute | null = route;
        while (currentRoute) {
          breadcrumbs.unshift(currentRoute);
          currentRoute = currentRoute.parent || null;
        }

        return breadcrumbs;
      })
    );
  }

  private findRouteByPath(
    routes: EnhancedNavigationRoute[],
    routeUrl: string
  ): EnhancedNavigationRoute | null {
    for (const route of routes) {
      if (route.path === routeUrl) return route;
      if (route.children) {
        const childRoute = this.findRouteByPath(route.children, routeUrl);
        if (childRoute) {
          return childRoute;
        }
      }
    }

    return null;
  }
}
