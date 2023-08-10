import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LevelThreeNavigationComponent } from './level-three-navigation.component';

@NgModule({
  declarations: [LevelThreeNavigationComponent],
  imports: [CommonModule, RouterModule],
  exports: [LevelThreeNavigationComponent],
})
export class LevelThreeNavigationModule {}
