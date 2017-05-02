import { Component, AfterContentInit, QueryList, ContentChildren } from '@angular/core';

import { TabComponent } from '../tab/tab.component'

@Component({
  selector: 'tabset',
  templateUrl: './tabset.component.html'
})
export class TabsetComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit() {
    this.tabs.toArray()[0].active = true
  }

  setActive(tab: TabComponent): void {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true
  }

}
