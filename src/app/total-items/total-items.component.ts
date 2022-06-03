import { Component, Input, OnInit } from '@angular/core';
import {TotalItemService} from './total-item.service'
@Component({
  selector: 'app-total-items',
  templateUrl: './total-items.component.html',
  styleUrls: ['./total-items.component.css']
})
export class TotalItemsComponent implements OnInit {

  constructor(private total:TotalItemService) { }
  @Input()
  totalItems!: { count: number;dishes:string;prices:number };
  ngOnInit(): void {
  }
  onClick(){
    alert('Are you sure you wants to go to cart ?')
  }
}
