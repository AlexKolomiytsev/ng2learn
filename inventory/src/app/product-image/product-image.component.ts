import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../models/product.model";

@Component({
  selector: 'product-image',
  styleUrls: ['./product-image.component.css'],
  host: {
    'class': 'ui small image'
  },
  template: `
    <img class="product-image" [src]="product.imageUrl">
`
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product

  constructor() { }

  ngOnInit() {
  }

}
