import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'native-encapsulation',
  styles: [`
    :host {
       background: orangered;
      font-size: 10px;
    }
    
    .highlight {
      text-align: center;
      border: 2px solid black;
      border-radius: 3px;
      margin-botton: 20px;
    }
  `],
  template: `
    <h4 class="ui horizontal divider header">
      Native encapsulation example
    </h4>

    <div class="highlight">
      This component uses <code>ViewEncapsulation.Native</code>
    </div>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class NativeEncapsulationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
