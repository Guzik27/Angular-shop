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

  removeProduct(id: number) {
    /*p = iteracja po obiektach w tablicy*/
  const productIndex = this.products.findIndex(p => p.id === id); /* find index iteruje pierwszy parametr(produkty), jeśli natrafi na iiterujące id to zwróci indeks tego elementu z tablicy*/
    this.products.splice(productIndex, 1);
  }

  /*obsługa ID*/
  private idCount: number = 3;
  saveProduct(product: Product) {
   /* product.id=this.idCount;
    this.products.push(product);
    this.idCount++;*/
   /*sprawdzamy czy ma id, jeśli tak to edycja,. jeśli nie to dodajemy nowy i zapisujemy*/
   if(product.id) {
     const productIndex = this.products.findIndex(p => p.id === product.id);
     this.products[productIndex] = product;
   } else{
     product.id=this.idCount;
     this.products.push(product);
     this.idCount++;
   }
  }

  /*tworzymy metodę zwracającą pojedynczy produkt po id*/
  getProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    return {...this.products[productIndex]}; /*przekazujemy kopie zamiast bezpośrednich referencji*/
  }


}
