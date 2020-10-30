import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AaComponent } from './aa/aa.component';
import { DdddddddComponent } from './dddddddd/dddddddd.component';
import { AlertComponent } from './_components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AaComponent,
    DdddddddComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
