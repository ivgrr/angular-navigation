import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from '../navigation/navigation.service';
import { EnhancedNavigationRoute } from '../navigation/navigation.types';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  protected readonly breadcrumbs!: Signal<
    EnhancedNavigationRoute[] | null | undefined
  >;

  constructor(
    private readonly navigationService: NavigationService,
    private readonly router: Router
  ) {
    const routeIsChanged = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );

    const breadcrumbs = routeIsChanged.pipe(
      switchMap(() => this.navigationService.getBreadcrumbs(this.router.url))
    );

    this.breadcrumbs = toSignal(breadcrumbs);
  }
}
