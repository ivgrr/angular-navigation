import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/navigation/navigation.service';
import { NavigationRoute } from 'src/app/navigation/navigation.types';

interface CardItem {
  title: string;
  icon?: string;
  path: string;
  children?: CardItem[];
}

@Component({
  selector: 'app-accounts-and-symbols',
  templateUrl: './accounts-and-symbols.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsAndSymbolsComponent implements OnInit, OnDestroy {
  navigationRoute: NavigationRoute | null = null;
  routerUrl: string;
  cardItems: CardItem[] = [];
  private subscription$: Subscription | undefined;

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.routerUrl = router.url;
  }

  ngOnInit() {
    this.subscription$ = this.navigationService
      .getRoute(this.routerUrl)
      .subscribe((route) => {
        this.navigationRoute = route;
        this.processCardItems();
      });
  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  private processCardItems() {
    if (!this.navigationRoute?.children) {
      return;
    }

    this.cardItems = this.navigationRoute.children.map((child) => ({
      title: child.title,
      icon: child.icon,
      path: child.path,
      children: child.children || [],
    }));
  }
}
