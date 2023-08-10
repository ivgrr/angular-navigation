import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedProfilesComponent } from './related-profiles.component';
import { RelatedProfilesRoutingModule } from './related-profiles-routing.module';

@NgModule({
  declarations: [RelatedProfilesComponent],
  imports: [CommonModule, RelatedProfilesRoutingModule],
})
export class RelatedProfilesModule {}
