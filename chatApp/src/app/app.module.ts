/*
 * Angular
 */
import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

/*
 * Components
 */
import {AppComponent} from './components/root/app.component'
import {ChatThreadsComponent} from './components/chat-threads/chat-threads.component'
import {ChatThreadComponent} from './components/chat-thread/chat-thread.component'
import {ChatWindowComponent} from './components/chat-window/chat-window.component'
import {ChatMessageComponent} from './components/chat-message/chat-message.component'
import {ChatNavBarComponent} from './components/chat-nav-bar/chat-nav-bar.component';
import {ChatPageComponent} from './components/chat-page/chat-page.component'

/*
 * Services
 */
import {USER_PROVIDERS} from './services/user.service'
import {MESSAGES_PROVIDERS} from './services/messages.service'
import {THREADS_PROVIDERS} from './services/threads.service'

/*
 * Pipes
 */
import {FromNowPipe} from './pipes/from-now.pipe';

/*
 * Ng Module
 */
@NgModule({
  declarations: [
    AppComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    FromNowPipe,
    ChatNavBarComponent,
    ChatPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    USER_PROVIDERS,
    MESSAGES_PROVIDERS,
    THREADS_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
