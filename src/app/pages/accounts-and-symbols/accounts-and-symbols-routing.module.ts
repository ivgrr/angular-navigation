import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsAndSymbolsComponent } from './accounts-and-symbols.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsAndSymbolsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsAndSymbolsRoutingModule {}
