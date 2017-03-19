import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
        <a [routerLink]="['search']">Search</a>
        <a [routerLink]="['artists', 1]">Artists</a>
        <a [routerLink]="['tracks', 1]">Tracks</a>
        <a [routerLink]="['albums', 1]">Albums</a>
    </nav>
    <router-outlet></router-outlet>  
  `,
})
export class RootComponent {
  title = 'app works!'
}
