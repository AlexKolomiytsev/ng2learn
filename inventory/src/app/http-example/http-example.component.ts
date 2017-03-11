import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {
  data: Object;
  loading: boolean;

  //public http: Http === this.http: Http
  constructor(private http: Http) { }

  makeRequest(): void {
    this.loading = true

    const root = 'http://jsonplaceholder.typicode.com'

    this.http.request(`${root}/posts/1`)
      .subscribe((res: Response) => {
        this.data = res.json()
        this.loading = false;
      })
  }

  ngOnInit() {
  }

}

//TODO: continue with page #158 'Writing a YouTubeSearchComponent'
//TODO: check angular2-webpack-starter examples
