import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent } from './_components/alert/alert.component';
import { AlertService } from './_services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
