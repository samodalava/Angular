import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialFormsComponent } from './material-forms/material-forms.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MaterialFormsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:   [LoginFormComponent]
})
export class AppModule { }
