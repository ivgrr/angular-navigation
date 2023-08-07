import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { EnhancedNavigationRoute } from '../navigation/navigation.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-level-three-navigation',
  templateUrl: './level-three-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelThreeNavigationComponent implements OnInit, OnDestroy {
  @Input() routePath!: string;
  private navigationSubscription!: Subscription;

  protected childrenRoutes!: EnhancedNavigationRoute[] | undefined;

  constructor(protected readonly navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationSubscription = this.navigationService
      .getRoute(this.routePath)
      .subscribe((route) => {
        this.childrenRoutes = route?.children;
      });
  }

  ngOnDestroy(): void {
    this.navigationSubscription.unsubscribe();
  }
}
