import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";
import {ProductStorageService} from "../../../product-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  /*wstrzykiwanie + po dodaniu przeniesienie do wszystkich produktów*/
  constructor(private productStorage: ProductStorageService, private router: Router, private activeRoute: ActivatedRoute) { } /*wbudowane w angulara do obsługi adresów*/

  ngOnInit(): void {
    this.getProductToEdit();
  }

  product: Product = new Product(); /*dzięki temu odnosząc się z formularza do właściwści będziemy go wyświwtlali jako pusty*/

  saveProduct(product: Product) {
    this.productStorage.saveProduct(product);
    this.router.navigate(['/shop'])
  }

  /*tworzymy metodę . WYwułuje się przy inicjalizacji edycji produktu*/
  getProductToEdit() {

  }

}
