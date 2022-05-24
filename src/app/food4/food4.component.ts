import { Component, OnInit } from '@angular/core';
import {Food4Service} from './food4.service'
@Component({
  selector: 'app-food4',
  templateUrl: './food4.component.html',
  styleUrls: ['./food4.component.css']
})
export class Food4Component implements OnInit {

  constructor(private food4Service:Food4Service) { }
  head2="Chinese"
  address="Opposite to highway plaza near Moti Manzil "
  chinese:any;
  ngOnInit(): void {
this.food4Service.getChinese()
.subscribe(chinese=>this.chinese=chinese)
  }

}
