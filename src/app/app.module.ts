import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopComponent } from './shop/shop.component';
import { ShippingComponent } from './shop/shipping/shipping.component';
import { ProductsComponent } from './shop/products/products.component';
import { EditorComponent } from './shop/products/editor/editor.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './shop/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShopComponent,
    ShippingComponent,
    ProductsComponent,
    EditorComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, /*bez tego ng modules nie zadziała*/
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
