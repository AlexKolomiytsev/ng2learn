/*
 * System imports
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  selector: 'chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.scss']
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread;
  selected = false

  constructor(public threadsService: ThreadsService) { }

  ngOnInit() {
    this.threadsService.currentThread
      .subscribe((currentThread: Thread) => {
        this.selected = currentThread && this.thread && (currentThread.id === this.thread.id)
      })
  }

  clicked(event: any): void {
    this.threadsService.setCurrentThread(this.thread)
    event.preventDefault()
  }

}
