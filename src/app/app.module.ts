import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [AppComponent, BreadcrumbsComponent],
  imports: [BrowserModule, AppRoutingModule, NavigationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
