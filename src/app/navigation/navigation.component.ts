import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from './navigation.service';
import { NavigationRoute } from './navigation.types';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit, OnDestroy {
  routes: NavigationRoute[] = [];
  private navigation$!: Subscription;

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.navigation$ = this.navigationService.getRoutes().subscribe((route) => {
      this.routes = route;
    });
  }

  ngOnDestroy() {
    this.navigation$.unsubscribe();
  }

  isChildActive(childRoute: NavigationRoute): boolean {
    return this.router.isActive(childRoute.path, false);
  }
}
