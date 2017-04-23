/*
 * System imports
 */
import { Component, OnInit, Input } from '@angular/core';

/*
 * Project imports
 */
import { Message, User } from '../../models'
import { UserService } from '../../services'

/*
 * Component
 */
@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message
  currentUser: User
  incoming: boolean

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser
      .subscribe((user: User) => {
        this.currentUser = user
        if (this.message.author && user) {
          this.incoming = this.message.author.id !== user.id
        }
      })
  }

}
