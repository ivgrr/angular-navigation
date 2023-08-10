import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsGroupsComponent } from './accounts-groups.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsGroupsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsGroupsRoutingModule {}
