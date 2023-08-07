import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {
  PageCardsComponent,
  PageCardItemComponent,
  PageCardItemHeadingComponent,
  PageCardItemContentComponent,
} from './page-cards/page-cards.component';
import { AccountsAndSymbolsComponent } from './pages';
import { LevelThreeNavigationComponent } from './level-three-navigation/level-three-navigation.component';
import { navigationRoutes } from './app.navigation';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule.forRoot(navigationRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
