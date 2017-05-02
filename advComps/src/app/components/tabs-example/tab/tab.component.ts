import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {
  @Input() title: string; //todo: try @Input('title') title: string
  active: boolean = false
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
