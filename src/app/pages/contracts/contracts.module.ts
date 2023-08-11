import { NgModule } from '@angular/core';
import { ContractsComponent } from './contracts.component';
import { ContractsRoutingModule } from './contracts-routing.module';
import { CommonModule } from '@angular/common';
import { PageCardsModule } from 'src/app/page-cards/page-cards.module';

@NgModule({
  declarations: [ContractsComponent],
  imports: [CommonModule, ContractsRoutingModule, PageCardsModule],
})
export class ContractsModule {}
