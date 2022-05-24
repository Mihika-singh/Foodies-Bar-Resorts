import { Component, OnInit } from '@angular/core';
import {FoodDisplayService} from './food-display.service';
@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent implements OnInit {
  foods1:any;
  foods2:any;
  foods3:any;
  foods4:any;
  totalItems:any;
  constructor(private foodService :FoodDisplayService) { }

  ngOnInit(): void {
     this.foodService.getFoods1()
   
    .subscribe(foods1 => this.foods1=foods1)
    this.foodService.getFoods2()
   
    .subscribe(foods2 => this.foods2=foods2)
    this.foodService.getFoods3()
   
    .subscribe(foods3 => this.foods3=foods3)
    this.foodService.getFoods4()
   
    .subscribe(foods4 => this.foods4=foods4)
  }
onClick(){
  console.log('rented');
}
}
