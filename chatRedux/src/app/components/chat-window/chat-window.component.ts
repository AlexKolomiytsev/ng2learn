import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {Store} from "redux";

import {Thread, Message, User} from '../../models'
import {AppStore} from "../../app.store";
import {AppState, getCurrentThread, getCurrentUser} from "../../app.reducer";
import * as ThreadsActions from '../../actions/thread.actions'

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  currentThread: Thread;
  currentUser: User;
  draftMessage: { text: string };

  constructor(@Inject(AppStore) private store: Store<AppState>,
              private el: ElementRef) {
    store.subscribe(() => this.updateState())
    this.updateState();
    this.draftMessage = {text: ''}
  }

  updateState() {
    const state = this.store.getState();
    this.currentThread = getCurrentThread(state);
    this.currentUser = getCurrentUser(state);
    this.scrollToBottom()
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el.nativeElement.querySelector('.msg-container-base');
    if (scrollPane) {
      setTimeout(() => scrollPane.scrollTop = scrollPane.scrollHeight)
    }
  }

  sendMessage(): void {
    this.store.dispatch(ThreadsActions.addMessage(this.currentThread,
      {
        author: this.currentUser,
        isRead: true,
        text: this.draftMessage.text
      }
    ));

    this.draftMessage = {text: ''};
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault()
  }

  ngOnInit() {
  }

}
