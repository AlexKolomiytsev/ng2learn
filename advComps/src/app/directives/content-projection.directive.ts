import {ElementRef, Input, HostBinding, Component} from '@angular/core';

@Component({
  selector: '[myMessage]',
  template: `
    <div class="header">
      {{ header }}
    </div>
    <p>
      <ng-content></ng-content>
    </p>
  `
})
export class ContentProjection {
  @Input() header: string;
  @HostBinding('attr.class') cssClasses = 'ui message'

  constructor(private _elementRef: ElementRef) {
    console.log(_elementRef)
  }

}
