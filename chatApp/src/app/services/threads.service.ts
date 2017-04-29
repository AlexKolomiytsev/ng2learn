/*
 * System imports
 */
import {Injectable} from "@angular/core"
import {Subject, BehaviorSubject, Observable} from 'rxjs'
import * as _ from 'lodash'

/*
 * Project imports
 */
import {Thread} from '../models/thread.model'
import {Message} from '../models/message.model'
import {MessagesService} from './messages.service'

@Injectable()
export class ThreadsService {
  // `threads` is a observable that contains the most up to date list of threads
  threads: Observable<{ [key: string]: Thread }>
  // `orderedThreads` contains a newest-first chronological list of threads
  orderedThreads: Observable<Thread[]>
  // `currentThread` contains the currently selected thread
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread())
  // `currentThreadMessages` contains the set of messages for the currently
  // selected thread
  currentThreadMessages: Observable<Message[]>

  constructor(public messagesService: MessagesService) {
    this.threads = messagesService.messages
      .map((messages: Message[]) => {
        const threads: {[key: string]: Thread} = {}

        // Store the message's thread in our accumulator 'threads'
        messages.map((message: Message) => {
          threads[message.thread.id] = threads[message.thread.id] || message.thread

          // Cache the most recent message for each thread
          const messagesThread: Thread = threads[message.thread.id]
          if (!messagesThread.lastMessage || messagesThread.lastMessage.sentAt < message.sentAt) {
            messagesThread.lastMessage = message
          }


        })

        return threads
      })

    this.orderedThreads = this.threads
      .map((threadGroups: { [key: string]: Thread}) => {
        const threads: Thread[] = _.values(threadGroups)
        return _.sortBy(threads, (t: Thread) => t.lastMessage.sentAt).reverse()
      })

    this.currentThread.subscribe(this.messagesService.markThreadAsRead)

    this.currentThreadMessages = this.currentThread
      .combineLatest(messagesService.messages, (currentThread: Thread, messages: Message[]) => {
        if (currentThread && messages.length > 0) {
          return _.chain(messages)
            .filter((message: Message) => message.thread.id === currentThread.id)
            .map((message: Message) => {
              message.isRead = true
              return message
            })
            .value()
        } else {
          return []
        }
      })
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread)
  }
}

export const THREADS_PROVIDERS: Array<any> = [
  {provide: ThreadsService, useClass: ThreadsService}
]

/*

 On our ThreadsService were going to define four streams that emit respectively:
 1. A map of the current set of Threads (in threads)
 2. A chronological list of Threads, newest-first (in orderedthreads)
 3. The currently selected Thread (in currentThread)
 4. The list of Messages for the currently selected Thread (in currentThreadMessages)

 */

//TODO: continue with 'Storing our state' (p. 343)
