import {Component, OnInit, Input} from '@angular/core';
import {Message} from '../../models'

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  incoming: boolean;

  constructor() {
  }

  ngOnInit() {
    this.incoming = !this.message.author.isClient;
  }

}
