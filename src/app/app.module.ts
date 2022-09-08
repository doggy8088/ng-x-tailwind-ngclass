import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ApplyButtonComponent } from './apply-button/apply-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ApplyButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
