import { NgModule } from '@angular/core';
import { AccountsAndSymbolsRoutingModule } from './accounts-and-symbols-routing.module';
import { AccountsAndSymbolsComponent } from './accounts-and-symbols.component';
import { PageCardsModule } from 'src/app/page-cards/page-cards.module';
import { LevelThreeNavigationModule } from 'src/app/level-three-navigation/level-three-navigation.module';

@NgModule({
  declarations: [AccountsAndSymbolsComponent],
  imports: [
    AccountsAndSymbolsRoutingModule,
    LevelThreeNavigationModule,
    PageCardsModule,
  ],
})
export class AccountsAndSymbolsModule {}
