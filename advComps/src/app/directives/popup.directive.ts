import {Directive, ElementRef, Input, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})
export class PopupDirective {
  @Input() message: string;

  constructor(private _elementRef: ElementRef) {
    console.log(_elementRef)
  }

  @HostListener('click') displayMessage(): void {
    alert(this.message)
  }
}
