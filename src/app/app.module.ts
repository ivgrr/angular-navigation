import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PageCardsComponent } from './components/page-cards/page-cards.component';
import { PageCardItemComponent } from './components/page-cards/page-card-item/page-card-item.component';
import { PageCardItemHeadingComponent } from './components/page-cards/page-card-item/page-card-item-heading/page-card-item-heading.component';
import { PageCardItemContentComponent } from './components/page-cards/page-card-item/page-card-item-content/page-card-item-content.component';
import { AccountsAndSymbolsComponent } from './pages';
import { LevelThreeNavigationComponent } from './level-three-navigation/level-three-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    AccountsAndSymbolsComponent,
    PageCardsComponent,
    PageCardItemComponent,
    PageCardItemHeadingComponent,
    PageCardItemContentComponent,
    LevelThreeNavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NavigationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
