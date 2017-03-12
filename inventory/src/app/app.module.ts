import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import {YoutubeServiceInjectables} from './injectables/youtubeService.injectables'

import {AppComponent} from './app.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductRowComponent} from './product-row/product-row.component';
import {ProductImageComponent} from './product-image/product-image.component';
import {PriceDisplayComponent} from './price-display/price-display.component';
import {ProductDepartmentComponent} from './product-department/product-department.component';
import {DemoFromSkuComponent} from './demo-from-sku/demo-from-sku.component';
import {HttpExampleComponent} from './http-example/http-example.component';
import {YoutubeSearchComponent} from './youtube-search/youtube-search.component';
import {YoutubeSearchBoxComponent} from './youtube-search-box/youtube-search-box.component';
import {YoutubeSearchResultsComponent} from './youtube-search-results/youtube-search-results.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {RouterAppComponent} from './router-app/router-app.component';

import {routes} from './routes/main'

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
    YoutubeSearchComponent,
    YoutubeSearchBoxComponent,
    YoutubeSearchResultsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RouterAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //ngModel, ngForm, ...
    ReactiveFormsModule, //formControl, ngFormGroup, ...
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    YoutubeServiceInjectables
  ],
  bootstrap: [RouterAppComponent] //AppComponent
})
export class AppModule {
}
