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
  }

  products: Product[] = []; /*tworzymy pustą tablicę*/

}
