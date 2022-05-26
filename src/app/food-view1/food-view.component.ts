import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FoodViewService } from './food-view.service';
@Component({
  selector: 'app-food-view',
  templateUrl: './food-view.component.html',
  styleUrls: ['./food-view.component.css']
})
export class FoodViewComponent implements OnInit {
  NorthIn$: any;
  totalItems: { count: number; dishes: string; prices: number; } | any;
  constructor(private view1Service: FoodViewService) { }

  head2 = "North Indian"
  priceZero = false;
  address = "Opposite to highway plaza near Moti Manzil "
  getTotal() {
    this.view1Service.getTotal().subscribe((totalItems) => {
      this.totalItems = totalItems;
    })
  }
  ngOnInit(): void {
    this.NorthIn$ = this.view1Service.getNorthIn()
    this.getTotal();
  }

  onAdd(event: any, North: any) {
    console.log(event)
    this.view1Service.addToCart(North.dish, North.price);
    this.getTotal();

    this.priceZero = true;


  }
  onRemove(event: any, North: any) {
    
    this.view1Service.removeFromCart(North.dish, North.price);
    this.getTotal();

    if (this.totalItems.count === 0 || this.totalItems.prices < 0) {
      this.totalItems.prices = 0;
      this.priceZero=    !this.priceZero

    }
  }
}
