import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopComponent } from './shop/shop.component';
import { ShippingComponent } from './shop/shipping/shipping.component';
import { ProductsComponent } from './shop/products/products.component';
import { EditorComponent } from './shop/products/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShopComponent,
    ShippingComponent,
    ProductsComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
