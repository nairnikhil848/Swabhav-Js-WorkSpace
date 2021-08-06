import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlueballgameComponent } from './blueballgame/blueballgame.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueballgameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
