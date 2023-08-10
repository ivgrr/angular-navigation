import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PageCardItemComponent,
  PageCardItemContentComponent,
  PageCardItemHeadingComponent,
  PageCardsComponent,
} from './page-cards.component';

@NgModule({
  declarations: [
    PageCardsComponent,
    PageCardItemComponent,
    PageCardItemContentComponent,
    PageCardItemHeadingComponent,
  ],
  imports: [CommonModule],
  exports: [
    PageCardsComponent,
    PageCardItemComponent,
    PageCardItemContentComponent,
    PageCardItemHeadingComponent,
  ],
})
export class PageCardsModule {}
