import { Store } from 'redux'

import { Component, Inject } from '@angular/core';
import { AppStore} from '../../app.store'
import { AppState, getUnreadMessagesCount } from '../../app.reducer'

@Component({
  selector: 'chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.scss']
})
export class ChatNavBarComponent {
  unreadMessagesCount: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState() {
    this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState())
  }


}
