import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymbolsGroupsComponent } from './symbols-groups.component';

const routes: Routes = [
  {
    path: '',
    component: SymbolsGroupsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymbolsGroupsRoutingModule {}
