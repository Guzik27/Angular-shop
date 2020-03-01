import { Injectable } from '@angular/core';
import {Product} from "./shop/products/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() { }

  private products: Product[] = [
    {id:1, name:'Produkt1', price: 10.00, quantity: 1000, available: true},
    {id:1, name:'Produkt2', price: 250.00, quantity: 300, available: false}
  ];

}
