import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http'
import { DatePipe } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetTwitterDataComponent } from './get-twitter-data/get-twitter-data.component';
import {TwitterService} from './TwitterService'

@NgModule({ 
  declarations: [
    AppComponent,
    GetTwitterDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    HttpClientModule
    
  ],
  providers: [TwitterService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
