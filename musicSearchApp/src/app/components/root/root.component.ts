import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Router Sample</h1>
        <div class="navLinks">
          <a [routerLink]="['/search']">Search music</a>
          <a [routerLink]="['/products']">Products</a>
        </div>
      </div>
    </div>

    <div id="content">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class RootComponent {
  title = 'app works!'
}
