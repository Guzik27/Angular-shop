import { Injectable } from '@angular/core';
import {Product} from "./shop/products/Product";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() { }

  private products: Product[] = [
    {id:1, name:'Produkt1', price: 10.00, quantity: 1000, available: true},
    {id:1, name:'Produkt2', price: 250.00, quantity: 300, available: false}
  ];

  /*metoda która zwraca tablicę. Obiekt obserwable działa jak obserwator, żeby go obserwować trzeba zasubskrybować jak newsletter. Jeśli pojawią się zmiany w tablicy to dostaniemy ją od razu*/
  getProducts(): Observable<Product[]> {
    return of(this.products); /* of zwraca Observable */
  }
}