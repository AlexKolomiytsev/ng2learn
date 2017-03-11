import {Component, OnInit, Output, EventEmitter, ElementRef} from '@angular/core';
import {SearchResult} from "../models/youtubeSearchResult.model";
import {YouTubeService} from "../services/youtubeService.service";
import {Element} from "@angular/compiler/src/ml_parser/ast";
import {Observable} from "rxjs";

@Component({
  selector: 'youtube-search-box',
  template: `
        <input type="text" class="form-control" placeholder="Search" autofocus>
    `,
  styleUrls: ['./youtube-search-box.component.css']
})
export class YoutubeSearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean>
  @Output() results: EventEmitter<SearchResult[]>

  constructor(private youtube: YouTubeService,
              private el: ElementRef) {
    this.loading = new EventEmitter<boolean>()
    this.results = new EventEmitter<SearchResult[]>()
  }

  ngOnInit(): void {
    //this.el.nativeElement - native DOM element this component is attached to
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.next(true))
      .map((query: string) => this.youtube.search(query))
      .switch()
      .subscribe(
        (results: SearchResult[]) => {
          console.log(results)
          this.loading.next(false)
          this.results.next(results)
        },
        (err: any) => {
          console.log(err)
          this.loading.next(false)
        },
        () => {
          this.loading.next(false)
        }
      )

  }

}
