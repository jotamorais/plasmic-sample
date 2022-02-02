import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlasmicModule } from '@plasmicapp/loader-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatchAllComponent } from './catch-all-component';

@NgModule({
  declarations: [
    AppComponent,
    CatchAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlasmicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
