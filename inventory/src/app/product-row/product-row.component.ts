import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../models/product.model";

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  host: {
    'class': 'item'
  }
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product

  constructor() {
  }

  ngOnInit() {
  }

}
