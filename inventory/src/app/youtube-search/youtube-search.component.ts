import { Component, OnInit } from '@angular/core';
import {SearchResult} from "../models/youtubeSearchResult.model";

let loadingGif: string = ((<any>window).__karma__) ? '' : require('../images/loading.gif');

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {
  results: SearchResult[]

  constructor() { }

  updateResults(results: SearchResult[]): void {
    this.results = results
  }

  ngOnInit() {
  }

}
