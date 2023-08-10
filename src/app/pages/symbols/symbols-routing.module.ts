import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymbolsComponent } from './symbols.component';

const routes: Routes = [
  {
    path: '',
    component: SymbolsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymbolsRoutingModule {}
