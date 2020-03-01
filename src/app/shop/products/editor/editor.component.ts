import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product: Product = new Product(); /*dzięki temu odnosząc się z formularza do właściwści będziemy go wyświwtlali jako pusty*/

  saveProduct(product: Product) {

  }
}
