import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from './navigation.service';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [NavigationService],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class NavigationModule {}
