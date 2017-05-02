import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs-example',
  templateUrl: './tabs-example.component.html'
})
export class TabsExampleComponent implements OnInit {
  tabs: any;

  constructor() { }

  ngOnInit() {
    this.tabs = [
      {title: 'About', content: 'This is the About tab'},
      {title: 'Blog', content: 'This is the Blog tab'},
      {title: 'Contact us', content: 'Contact us here'}
    ]
  }

}
