import { Component, OnInit } from '@angular/core';
import {Product} from "./Product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*typujemy obiektami */
  products: Product[] = [
    {id:1, name:'Produkt1', price: 10.00, quantity: 1000, available: true},
    {id:1, name:'Produkt2', price: 250.00, quantity: 300, available: false}
  ];

}
