import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  EnhancedNavigationRoute,
  NAVIGATION_ENHANCEMENTS,
  NavigationEnhancement,
  NavigationRoute,
  NavigationRoutes,
  NavigationServiceBase,
} from './navigation.types';

@Injectable()
export class NavigationService extends NavigationServiceBase {
  private routes: Observable<NavigationRoute[]> | null = null;
  private enhancedRoutes: Observable<EnhancedNavigationRoute[]> | null = null;

  constructor(
    @Inject(NavigationRoutes)
    private navigationRoutes: NavigationRoute[],
    @Inject(NAVIGATION_ENHANCEMENTS)
    private navigationEnhancements: NavigationEnhancement[]
  ) {
    super();
    this.getRoutesFromObservable();
    this.enhanceRoutes();
  }

  private getRoutesFromObservable(): void {
    this.routes = of(this.navigationRoutes);
  }

  private enhanceRoutes(): void {
    if (!this.routes) {
      this.enhancedRoutes = null;
      return;
    }

    if (!this.navigationEnhancements || !this.navigationEnhancements.length) {
      this.enhancedRoutes = this.routes.pipe(
        map(
          (routes) =>
            this.setParentsForChildren(
              routes,
              null
            ) as EnhancedNavigationRoute[]
        )
      );
      return;
    }

    const combinedEnhancement: NavigationEnhancement = (
      sourceRoutes: Observable<EnhancedNavigationRoute[]>
    ) => {
      return sourceRoutes.pipe(
        switchMap((routes: EnhancedNavigationRoute[]) => {
          return this.navigationEnhancements.reduce(
            (acc, enhancement) => enhancement(acc),
            of(routes)
          );
        })
      );
    };

    this.enhancedRoutes = combinedEnhancement(
      this.routes.pipe(
        map((routes) => this.setParentsForChildren(routes, null))
      )
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

  getRoutes(): Observable<EnhancedNavigationRoute[]> {
    return this.enhancedRoutes || of([]);
  }

  getRoute(routeUrl: string): Observable<EnhancedNavigationRoute | null> {
    return this.getRoutes().pipe(
      map((routes) => routes.find((route) => route.path === routeUrl) || null)
    );
  }

  getBreadcrumbs(
    routeUrl: string
  ): Observable<EnhancedNavigationRoute[] | null> {
    return this.getRoutes().pipe(
      switchMap((routes) => {
        const breadcrumbs: EnhancedNavigationRoute[] = [];
        let currentRoute: EnhancedNavigationRoute | null = null;

        for (const route of routes) {
          currentRoute = this.findRouteByPath(route, routeUrl);
          if (currentRoute) break;
        }

        if (!currentRoute) return of(null);

        while (currentRoute) {
          breadcrumbs.unshift(currentRoute);
          currentRoute = currentRoute.parent || null;
        }

        return of(breadcrumbs);
      })
    );
  }

  private findRouteByPath(
    route: EnhancedNavigationRoute,
    routeUrl: string
  ): EnhancedNavigationRoute | null {
    if (route.path === routeUrl) return route;
    if (route.children) {
      for (const childRoute of route.children) {
        const foundRoute = this.findRouteByPath(childRoute, routeUrl);
        if (foundRoute) return foundRoute;
      }
    }
    return null;
  }
}
