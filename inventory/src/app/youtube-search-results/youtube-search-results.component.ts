import {Component, OnInit, Input} from '@angular/core';
import {SearchResult} from "../models/youtubeSearchResult.model";

@Component({
  selector: 'youtube-search-results',
  templateUrl: './youtube-search-results.component.html',
  styleUrls: ['./youtube-search-results.component.css']
})
export class YoutubeSearchResultsComponent implements OnInit {
  @Input() result: SearchResult

  constructor() { }

  ngOnInit() {
  }

}
