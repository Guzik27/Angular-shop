import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopComponent } from './shop/shop.component';
import { ShippingComponent } from './shop/shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShopComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
