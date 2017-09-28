import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { ChatComponent } from './chat/chat.component';
import { Chat2Component } from './chat2/chat2.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    ChatComponent,
    Chat2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
