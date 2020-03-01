import { Component, OnInit } from '@angular/core';
import {Product} from "./Product";
import {ProductStorageService} from "../../product-storage.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  /*wstrzykujemy zależność (servis) */
  constructor(private productStorage: ProductStorageService) { }

  ngOnInit(): void {
    this.getProducts();
  }



  products: Product[] = []; /*tworzymy pustą tablicę*/

  /*tworzymy metodę komponentu i subskrybujemy*/
  getProducts() {
    this.productStorage.getProducts().subscribe(products=> this.products = products); /*Przekazujemy kopie, a nie referencje. obserwator zwraca wartość, wartością są produkty, product przypisujemy do tablicy products*/
  }

  removeProduct(id:number) {

  }

}
