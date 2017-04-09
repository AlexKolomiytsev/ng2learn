import {Injectable} from "@angular/core";
import {User} from "../models/user.model";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Message} from "../models/message.model";
import {Thread} from "../models/thread.model";

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[]
}

@Injectable()
export class MessagesService {
  newMessages: Subject<Message> = new Subject<Message>()
  messages: Observable<Message[]>
  updates: Subject<any> = new Subject<any>()

  constructor() {
    this.messages = this.updates
      .scan((messages: Message[],
             operation: IMessagesOperation) => {
          return operation(messages)
        },
        initialMessage)
  }

  addMessage(message: Message) {
    this.newMessages.next(message)
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages
      .filter((message: Message) => {
        // belongs to this thread
        return (message.thread.id === thread.id)
          // and is not authored by this user
          && (message.author.id !== user.id)
      })
  }
}

export const MESSAGES_PROVIDERS: Array<any> = [
  {provide: MessagesService, useClass: MessagesService}
]

//TODO: 'Sharing the Stream' p.287
