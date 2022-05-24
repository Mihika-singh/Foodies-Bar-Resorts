import { Component, OnInit } from '@angular/core';
// import {FoodDisplayService} from './food-display/food-display.service';
import {ServiceDisplayService} from './service-display.service'
@Component({
  selector: 'app-services-display',
  templateUrl: './services-display.component.html',
  styleUrls: ['./services-display.component.css']
})
export class ServicesDisplayComponent implements OnInit {
services1:any;
services2:any;
  constructor( private serviceDisplay:ServiceDisplayService) { }

  ngOnInit(): void {
this.serviceDisplay.getServices1().subscribe(services1=>this.services1=services1)
this.serviceDisplay.getServices2().subscribe(services2=>this.services2=services2)
  }

}
