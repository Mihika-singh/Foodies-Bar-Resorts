import { Component, OnInit } from '@angular/core';
import { FoodDisplayService } from './food-display.service';
@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent implements OnInit {
  foods: any;

 
  constructor(private foodService: FoodDisplayService) { }

  ngOnInit(): void {
    this.foodService.getFoods()

      .subscribe(food => this.foods = food)

  }

}
