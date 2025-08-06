import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ProductListComponent } from './components/product-list/product-list';
import { CartComponent } from './components/cart/cart';

@NgModule({
  declarations: [
    App,
    ProductListComponent,
    CartComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}
