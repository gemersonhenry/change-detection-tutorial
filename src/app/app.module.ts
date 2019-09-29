import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example01Component } from './examples/change-detector-ref/example01/example01.component';
import { ContentRoutesComponent } from './examples/content-routes/content-routes.component';

@NgModule({
  declarations: [
    AppComponent,
    Example01Component,
    ContentRoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
