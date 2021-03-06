import {Component} from '@angular/core';
import {Product} from './models/product.model'

@Component({
  selector: 'app-root',
  template: `
    <app-youtube-search></app-youtube-search>
    <app-http-example></app-http-example>
    <demo-from-sku></demo-from-sku>
    <div class="inventory-app">
        <products-list
        [productList]="products"
        (onProductSelected)="productWasSelected($event)">       
        </products-list>
    </div>
 `
})
export class AppComponent {
  products: Product[]

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )
    ]
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product)
  }

}
