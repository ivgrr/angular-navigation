import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedProfilesComponent } from './related-profiles.component';
import { RelatedProfilesRoutingModule } from './related-profiles-routing.module';
import { PageCardsModule } from 'src/app/page-cards/page-cards.module';

@NgModule({
  declarations: [RelatedProfilesComponent],
  imports: [CommonModule, RelatedProfilesRoutingModule, PageCardsModule],
})
export class RelatedProfilesModule {}
