import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from './navigation.service';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { NavigationRoute, NavigationRoutes } from './navigation.types';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [NavigationService],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class NavigationModule {
  static forRoot(
    config: NavigationRoute[]
  ): ModuleWithProviders<NavigationModule> {
    return {
      ngModule: NavigationModule,
      providers: [
        {
          provide: NavigationRoutes,
          useValue: config,
        },
        NavigationService,
      ],
    };
  }
}
