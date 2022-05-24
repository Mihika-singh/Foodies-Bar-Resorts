import { Component, OnInit } from '@angular/core';
import {Food2ServiceService} from './food2-service.service'
@Component({
  selector: 'app-food2',
  templateUrl: './food2.component.html',
  styleUrls: ['./food2.component.css']
})
export class Food2Component implements OnInit {

  constructor(private food2Service:Food2ServiceService) { }
SouthIn:any;
head2="South Indian"
 address="Opposite to highway plaza near Moti Manzil "
  ngOnInit(): void {
this.food2Service.getSouthIn()
.subscribe(SouthIn=>this.SouthIn=SouthIn)
  }

} 
