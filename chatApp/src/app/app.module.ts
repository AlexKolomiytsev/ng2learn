/*
 * Angular
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

/*
 * Components
 */
import {AppComponent} from './components/root/app.component';

/*
 * Services
 */
import {USER_PROVIDERS} from './services/user.service';
import {MESSAGES_PROVIDERS} from './services/messages.service'

/*
 * Ng Module
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    USER_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
