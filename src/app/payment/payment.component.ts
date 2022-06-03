import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodsDetailService } from '../foods-detail/foods-detail.service';
import { TotalItemService } from '../total-items/total-item.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private foodDetail:FoodsDetailService,private total:TotalItemService,private route:ActivatedRoute,private router:Router) { }
 
@Input()
  totalQuantity!: { count: number;dishes:string;prices:number };
  food:any;
  ngOnInit(): any {
    this.foodDetail.getFoodDetails()
    .subscribe((foods:any) => {
      this.food = foods;
       this.getTotal1()
    })
  }
  getTotal1() {
    this.foodDetail.getTotal().subscribe((totalQuantity) => {
      this.totalQuantity = totalQuantity;
    })
  }
  
  cart(  food:any) {
    console.log(event)
    this.foodDetail.cart(food.dish,food.price);
    this.getTotal1()
  }
}