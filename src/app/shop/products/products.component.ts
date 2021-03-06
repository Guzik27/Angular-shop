import { Component, OnInit } from '@angular/core';
import {Product} from "./Product";
import {ProductStorageService} from "../../product-storage.service";
import {HttpClientService} from "../../http-client.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  /*wstrzykujemy zależność (servis) */
  constructor(private productStorage: ProductStorageService, private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.getProducts();
  }



  products: Product[] = [
  /*  {id:8, available:false, name:"Michał", price:88.00, quantity:785}*/   /*testowo dodałem*/
  ]; /*tworzymy pustą tablicę*/

  /*tworzymy metodę komponentu i subskrybujemy*/
  getProducts() {
    this.httpClient.getProducts().subscribe(products=> this.products = products); /*Przekazujemy kopie, a nie referencje. obserwator zwraca wartość, wartością są produkty, product przypisujemy do tablicy products*/
  }

  removeProduct(id:number) {
    this.httpClient.removeProduct(id).subscribe( r => {
      this.getProducts();
    });
  }

}
