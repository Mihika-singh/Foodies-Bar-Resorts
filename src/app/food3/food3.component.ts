import { Component, OnInit } from '@angular/core';
import {Food3Service} from './food3.service'
@Component({
  selector: 'app-food3',
  templateUrl: './food3.component.html',
  styleUrls: ['./food3.component.css']
})
export class Food3Component implements OnInit {

  constructor(private food3Service:Food3Service) { }
  head2="Pizza"
  address="Opposite to highway plaza near Moti Manzil "
  pizzas:any;
  ngOnInit(): void {
this.food3Service.getPizzas()
.subscribe(pizzas=>this.pizzas=pizzas)
  }

}
