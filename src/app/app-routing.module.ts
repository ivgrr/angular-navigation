import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AccountsAndSymbolsComponent,
  AccountsComponent,
  AccountsGroupsComponent,
  ContractsComponent,
  DashboardComponent,
  RelatedProfilesComponent,
  SymbolsComponent,
  SymbolsGroupsComponent,
} from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'accounts-and-symbols', component: AccountsAndSymbolsComponent },
  { path: 'accounts-and-symbols/accounts', component: AccountsComponent },
  { path: 'accounts-and-symbols/symbols', component: SymbolsComponent },
  {
    path: 'accounts-and-symbols/accounts/related-profiles',
    component: RelatedProfilesComponent,
  },
  {
    path: 'accounts-and-symbols/accounts/accounts-groups',
    component: AccountsGroupsComponent,
  },
  {
    path: 'accounts-and-symbols/symbols/contracts',
    component: ContractsComponent,
  },
  {
    path: 'accounts-and-symbols/symbols/symbols-groups',
    component: SymbolsGroupsComponent,
  },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
