import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsGroupsComponent } from './accounts-groups.component';
import { AccountsGroupsRoutingModule } from './accounts-groups-routing.module';
import { PageCardsModule } from 'src/app/page-cards/page-cards.module';

@NgModule({
  declarations: [AccountsGroupsComponent],
  imports: [CommonModule, AccountsGroupsRoutingModule, PageCardsModule],
})
export class AccountsGroupsModule {}
