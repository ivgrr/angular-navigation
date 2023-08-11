import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymbolsGroupsComponent } from './symbols-groups.component';
import { SymbolsGroupsRoutingModule } from './symbols-groups-routing.module';
import { PageCardsModule } from 'src/app/page-cards/page-cards.module';

@NgModule({
  declarations: [SymbolsGroupsComponent],
  imports: [CommonModule, SymbolsGroupsRoutingModule, PageCardsModule],
})
export class SymbolsGroupsModule {}
