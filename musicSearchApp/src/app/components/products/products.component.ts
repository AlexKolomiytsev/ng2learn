/*
 * Angular
 */
import {Component, NgModule} from '@angular/core';
import {RouterModule, ActivatedRoute, Router, Routes} from "@angular/router";

/*
 * Children components
 */
import {MainComponent} from "./children/main/main.component";
import {ByIdComponent} from "./children/by-id/by-id.component";
import {InterestComponent} from "./children/interest/interest.component";
import {SportifyComponent} from "./children/sportify/sportify.component";

/*
 * Component
 */
@Component({
  selector: 'products',
  template: `
    <h2>Products</h2>

    <div class="navLinks">
      <a [routerLink]="['./main']">Main</a>
      <a [routerLink]="['./interest']">Interest</a>
      <a [routerLink]="['./sportify']">Sportify</a>
      Enter id: <input #id size="6">
      <button (click)="goToProduct(id.value)">Go</button>
    </div>

    <div class="products-area">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route})
  }
}

export const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'sportify', component: SportifyComponent},
  {path: 'interest', component: InterestComponent},
  {path: ':id', component: ByIdComponent}
]

@NgModule({
  declarations: [
    ProductsComponent,
    ByIdComponent,
    MainComponent,
    InterestComponent,
    SportifyComponent,
  ],
  exports: [
    ProductsComponent,
    MainComponent,
    InterestComponent,
    SportifyComponent,
    ByIdComponent
  ],
  imports: [RouterModule]
})
export class ProductsComponentModule {}

//TODO: 'Nested Routes' complete; start with 'Dependency Injection' (p. 239)
