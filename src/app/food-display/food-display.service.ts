import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FoodDisplayService {

  constructor() { }
getFood(id: number) {
  return this.getFoods()
  .pipe(
    map(foods => {
      return foods.filter(food => food.id === id)[0]
    })
  )
  
}

getFoods() {
  return of([
    {
      "id": 0,
      "title": "North Indian",        
      "stars": 4.1,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
    "FoodType":"northIndia",
    "route":'north',
    },
    {
      "id": 1,
      "title": "South Indian",        
      "stars": 4.2,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4e17txVLpsv_-qTPbeI7KMXiRS7bOFQd2w&usqp=CAU",
      "FoodType":"southIndia",
      "route":'south',
    },
    {
      "id": 3,
      "title": "Pizza",        
      "stars": 4.5,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2KMZZHLtJGCk5zQlKlVmi5Jq1vPCXnzUFQ&usqp=CAU",
      "FoodType":"pizzas",
      "route":'pizza',
    },
    {
      "id": 4,
      "title": "Chinese",        
      "stars": 4.1,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAl6iwa7_pKGJwXHRzKrctK9_UVAkxFbuHQ&usqp=CAU",
      "FoodType":"chinese",
      "route":'chinese',
    },
  ])
    
}

}