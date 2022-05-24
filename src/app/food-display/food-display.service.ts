import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FoodDisplayService {

  constructor() { }
  getTotal() {
    return of({
      count:0,
      titles: "",
      price:0
    })
  }
 
getFood1(id: number) {
  return this.getFoods1()
  .pipe(
    map(foods1 => {
      return foods1.filter(food1 => food1.id === id)[0]
    })
  )
  
}

getFoods1() {
  return of([
    {
      "id": 0,
      "title": "North Indian",        
      "stars": 4.1,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU"
    },
  ])
    
}

getFood2(id:number) {
return this.getFoods2()
.pipe(
  map(foods2 => {
    return foods2.filter(food2 => food2.id === id)[0]
  })
)

}

getFoods2() {
return of([
  {
    "id": 1,
    "title": "South Indian",        
    "stars": 4.2,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4e17txVLpsv_-qTPbeI7KMXiRS7bOFQd2w&usqp=CAU"
  },
  
])
}

getFood3(id: number) {
return this.getFoods3()
.pipe(
  map(foods3 => {
    return foods3.filter(food3 => food3.id === id)[0]
  })
)

}

getFoods3() {
return of([
  {
    "id": 3,
    "title": "Pizza",        
    "stars": 4.5,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2KMZZHLtJGCk5zQlKlVmi5Jq1vPCXnzUFQ&usqp=CAU"
  },
])
  
}

getFood4(id: number) {
return this.getFoods4()
.pipe(
map(foods4 => {
  return foods4.filter(food4 => food4.id === id)[0]
})
)

}


getFoods4() {
return of([
  {
    "id": 4,
    "title": "Chinese",        
    "stars": 4.1,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAl6iwa7_pKGJwXHRzKrctK9_UVAkxFbuHQ&usqp=CAU"
  },
])
  
}
}


 