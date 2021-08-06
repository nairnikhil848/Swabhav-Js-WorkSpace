import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeAppComponent } from './welcome-app/welcome-app.component';

@NgModule({
  declarations: [AppComponent, WelcomeAppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, WelcomeAppComponent],
})
export class AppModule {}
