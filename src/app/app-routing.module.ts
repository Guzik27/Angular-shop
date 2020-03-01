import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ShopComponent} from "./shop/shop.component";


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
