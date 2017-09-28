import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { Chat2Component } from './chat2/chat2.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'chat', component: ChatComponent, outlet: "aux" },
  { path: 'chat2', component: Chat2Component, outlet: "aux" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
