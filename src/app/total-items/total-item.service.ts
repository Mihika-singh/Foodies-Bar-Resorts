import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TotalItemService {
totalItem:any[]=[];
  constructor() { }
  getTotal() {
    return of({
      count:0,
      titles: "",
      price:0
    })

  }
  addtoCart(item:any){ 
this.totalItem.push(item);
  }
  
}
