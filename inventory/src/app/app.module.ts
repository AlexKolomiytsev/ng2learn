import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { YoutubeServiceInjectables } from './injectables/youtubeService.injectables'

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { DemoFromSkuComponent } from './demo-from-sku/demo-from-sku.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    DemoFromSkuComponent,
    HttpExampleComponent,
    YoutubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //ngModel, ngForm, ...
    ReactiveFormsModule, //formControl, ngFormGroup, ...
    HttpModule
  ],
  providers: [
    YoutubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
