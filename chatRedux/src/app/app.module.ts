import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {appStoreProviders} from './app.store'

import { AppComponent } from './components/root/app.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { ChatNavBarComponent } from './components/chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './components/chat-threads/chat-threads.component';
import { ChatThreadComponent } from './components/chat-thread/chat-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [appStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
