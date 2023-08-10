import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatedProfilesComponent } from './related-profiles.component';

const routes: Routes = [
  {
    path: '',
    component: RelatedProfilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatedProfilesRoutingModule {}
