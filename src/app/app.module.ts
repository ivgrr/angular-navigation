import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { navigationRoutes } from './app.navigation';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule.forRoot(navigationRoutes),
    BreadcrumbsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
