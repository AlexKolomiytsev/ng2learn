import {Component, Inject} from '@angular/core';
import {ChatExampleData} from '../../data/chat-example-data'

import {UserService} from '../../services/user.service'
import {MessagesService} from '../../services/messages.service'
import {ThreadsService} from '../../services/threads.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService)
  }
}
