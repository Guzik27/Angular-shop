import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shippingMethodName1:string = 'Paczkomat';
  shippingMethodName2:string = 'Kurier-przedpłata';
  shippingMethodName3:string = 'Kurier-pobranie';

  shippingMethodPrice1:number = 10.00;
  shippingMethodPrice2:number = 15.50;
  shippingMethodPrice3:number = 20.20;

}
