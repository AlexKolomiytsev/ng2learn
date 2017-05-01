import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {appStoreProviders} from './app.store'

import {FromNowPipe} from './pipes/from-now.pipe'

import { AppComponent } from './components/root/app.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { ChatNavBarComponent } from './components/chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './components/chat-threads/chat-threads.component';
import { ChatThreadComponent } from './components/chat-thread/chat-thread.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatWindowComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    appStoreProviders,
    FromNowPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
