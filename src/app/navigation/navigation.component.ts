import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationService } from './navigation.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  protected readonly routes = toSignal(this.navigationService.getRoutes());

  constructor(private readonly navigationService: NavigationService) {}
}
