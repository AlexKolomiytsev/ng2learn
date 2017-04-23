/*
 * System imports
 */
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs'

/*
 * Project imports
 */
import { ThreadsService } from '../../services/threads.service'
import { Thread } from '../../models/thread.model'

/*
 * Component
 */
@Component({
  selector: 'chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.scss']
})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<Thread[]>;

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads
  }

  ngOnInit() {
  }

}
