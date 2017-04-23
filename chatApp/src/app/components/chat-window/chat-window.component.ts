/*
 * System imports
 */
import {Component, OnInit, Inject, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs'

/*
 * Project imports
 */
import {Message, Thread, User} from '../../models'
import {MessagesService, ThreadsService, UserService} from '../../services'

/*
 * Component
 */
@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>
  currentThread: Thread
  draftMessage: Message
  currentUser: User

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService,
              public el: ElementRef) {
  }

  ngOnInit() {
    this.messages = this.threadsService.currentThreadMessages

    this.draftMessage = new Message()

    this.threadsService.currentThread
      .subscribe((thread: Thread) => {
        this.currentThread = thread
      })

    this.userService.currentUser
      .subscribe((user: User) => {
        this.currentUser = user
      })

    this.messages
      .subscribe((messages: Message[]) => {
        setTimeout(() => {
          this.scrollToBottom()
        })
      })
  }

  sendMessage(): void {
    const m: Message = this.draftMessage
    m.author = this.currentUser
    m.thread = this.currentThread
    m.isRead = true
    this.messagesService.addMessage(m)
    this.draftMessage = new Message()
  }

  onEnter(event: any): void {
    this.sendMessage()
    event.preventDefault()
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base')
    scrollPane.scrollTop = scrollPane.scrollHeight
  }

}
