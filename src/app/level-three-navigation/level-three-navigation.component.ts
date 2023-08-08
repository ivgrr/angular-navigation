import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { EnhancedNavigationRoute } from '../navigation/navigation.types';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-level-three-navigation',
  templateUrl: './level-three-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelThreeNavigationComponent implements OnInit {
  @Input() routePath!: string;
  protected childrenRoutes!: Observable<EnhancedNavigationRoute[] | undefined>;

  constructor(private readonly navigationService: NavigationService) {}

  ngOnInit() {
    this.childrenRoutes = this.navigationService
      .getRoute(this.routePath)
      .pipe(map((route) => route?.children));
  }
}
