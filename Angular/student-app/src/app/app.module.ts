import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeAppComponent } from './welcome-app/welcome-app.component';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { CommonModule } from '@angular/common';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, StudentComponent, TwowaybindComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [
    AppComponent,
    WelcomeAppComponent,
    StudentComponent,
    TwowaybindComponent,
  ],
})
export class AppModule {}
