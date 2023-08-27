import { Inject, Injectable } from '@angular/core';
import { Observable, OperatorFunction, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  EnhancedNavigationRoute,
  NAVIGATION_ENHANCEMENTS,
  NavigationEnhancement,
  NavigationRoute,
  NavigationRouteData,
  NavigationRoutes,
  NavigationServiceBase,
} from './navigation.types';

const enhanceRoutes =
  (
    enhancements: NavigationEnhancement[]
  ): OperatorFunction<NavigationRoute[], EnhancedNavigationRoute[]> =>
  (
    source: Observable<NavigationRoute[]>
  ): Observable<EnhancedNavigationRoute[]> => {
    for (const enhancement of enhancements) {
      source = enhancement(source);
    }
    return source;
  };

@Injectable()
export class NavigationService extends NavigationServiceBase {
  private readonly enhancedRoutes: Observable<EnhancedNavigationRoute[]>;

  constructor(
    @Inject(NavigationRoutes)
    private navigationRoutes: NavigationRoute[],
    @Inject(NAVIGATION_ENHANCEMENTS)
    private navigationEnhancements: NavigationEnhancement[]
  ) {
    super();

    this.enhancedRoutes = of(this.navigationRoutes).pipe(
      enhanceRoutes(this.navigationEnhancements),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  public override getRoutes(): Observable<EnhancedNavigationRoute[]> {
    return this.enhancedRoutes;
  }

  public override getRoute(
    routeUrl: string
  ): Observable<EnhancedNavigationRoute | null> {
    return this.getRoutes().pipe(
      map((routes: EnhancedNavigationRoute[]) =>
        this.findRouteByPath(routes, routeUrl)
      )
    );
  }

  public override getRouteData(
    routeUrl: string
  ): Observable<NavigationRouteData[] | undefined> {
    return this.getRoute(routeUrl).pipe(
      map((route: EnhancedNavigationRoute | null) => route?.data)
    );
  }

  public override getBreadcrumbs(
    routeUrl: string
  ): Observable<EnhancedNavigationRoute[] | null> {
    return this.getRoute(routeUrl).pipe(
      map(
        (
          route: EnhancedNavigationRoute | null
        ): EnhancedNavigationRoute[] | null => {
          const breadcrumbs: EnhancedNavigationRoute[] = [];

          if (!route) return null;

          let currentRoute: EnhancedNavigationRoute | null = route;
          while (currentRoute) {
            breadcrumbs.unshift(currentRoute);
            currentRoute = currentRoute.parent || null;
          }

          return breadcrumbs;
        }
      )
    );
  }

  private findRouteByPath(
    routes: EnhancedNavigationRoute[],
    routeUrl: string
  ): EnhancedNavigationRoute | null {
    for (const route of routes) {
      if (route.path === routeUrl) return route;
      if (route.children) {
        const childRoute: EnhancedNavigationRoute | null = this.findRouteByPath(
          route.children,
          routeUrl
        );
        if (childRoute) {
          return childRoute;
        }
      }
    }

    return null;
  }
}
