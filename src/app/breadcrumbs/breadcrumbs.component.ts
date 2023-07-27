import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from '../navigation/navigation.service';
import { EnhancedNavigationRoute } from '../navigation/navigation.types';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnDestroy {
  breadcrumbs: EnhancedNavigationRoute[] | null = null;
  routeUrl: string;
  private subscription$: Subject<void> = new Subject<void>();

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.routeUrl = this.router.url;
    this.router.events
      .pipe(takeUntil(this.subscription$))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.routeUrl = event.url;
          this.updateBreadcrumbs();
        }
      });
  }

  private updateBreadcrumbs() {
    this.navigationService
      .getBreadcrumbs(this.routeUrl)
      .pipe(takeUntil(this.subscription$))
      .subscribe((enhancedData) => {
        this.breadcrumbs = enhancedData;
      });
  }

  ngOnDestroy() {
    this.subscription$.next();
    this.subscription$.complete();
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
