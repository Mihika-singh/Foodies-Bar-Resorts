import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodsDetailService } from './foods-detail.service';

@Component({
  selector: 'app-foods-detail',
  templateUrl: './foods-detail.component.html',
  styleUrls: ['./foods-detail.component.css']
})
export class FoodsDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private foodDetail:FoodsDetailService) { }
foods:any;
itemPlus=false;
totalItems: { count: number; dishes: string; prices: number; } | any;
totalQuantity: { count: number; dishes: string; prices: number; } | any;
address = "Opposite to highway plaza near Moti Manzil "
  ngOnInit(): void {
    this.route.queryParamMap
    .subscribe((qps:any)=>{
      if(qps.has('foodRoute')){
        this.foodDetail.getFoodDivision(qps.get('foodRoute'))
        .subscribe((foods:any)=>{this.foods=foods
          this.getTotal();
      })
    }
    else{
      this.foodDetail.getFoodDetails()
      .subscribe((foods:any) => {
        this.foods = foods;
        this.getTotal();
      })
    }
  })
}

priceZero = false;
getTotal() {
  this.foodDetail.getTotal().subscribe((totalItems) => {
    this.totalItems = totalItems;
  })
}
onAdd(  food:any) {
  console.log(event)
  this.foodDetail.addToCart(food.dish,food.price);
  this.getTotal();
  this.priceZero = true;
this.itemPlus=true;
}
onRemove(  food: any) {
  this.foodDetail.removeFromCart(food.dish,food.price );
  this.getTotal();
if(this.totalItems.count===0){  
  this.itemPlus=false;
}
if (this.totalItems.count === 0 || this.totalItems.prices < 0) {
  this.totalItems.prices = 0;
  this.priceZero=    !this.priceZero

}
}
}



