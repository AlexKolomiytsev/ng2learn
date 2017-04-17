/*
 * System imports
 */
import * as _ from 'lodash'
import {Injectable} from "@angular/core"
import {Subject, BehaviorSubject, Observable} from 'rxjs'

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

//TODO: continue with 'Trying out the ThreadsService' (p. 299)
