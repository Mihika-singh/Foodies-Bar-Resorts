import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Food3Service {

  constructor() { }
  getPizza(id:number){
    return this.getPizzas()
    .pipe(
      map(pizzas=>{
return pizzas.filter( pizza => pizza.id === id)[0]
      } )
    )
  }
  getPizzas(){
    return of([
      {
      "id": 0,
      "dish": "Paneer & Onion",        
      "stars": 4.0,
      "price":125,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 1,
        "dish": "Golden corn",        
        "stars": 4.5,
        "price":95,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
        },
        {
          "id": 2,
          "dish": "Veg Loaded",        
          "stars": 3.5,
          "price":165,
          "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
          },
          {
            "id": 3,
            "dish":  "Farm house",        
            "stars": 4.6,
            "price":269,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
            },
            {
              "id": 4,
              "dish": "Indi Tandoori Paneer",        
              "stars": 4.2,
              "price":319,
              "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
              },
              {
                "id": 5,
                "dish": "Margherita",        
                "stars": 4.0,
                "price":130,
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                },
                {
                  "id": 6,
                  "dish": "Cheesy",        
                  "stars": 4.0,
                  "price":115,
                  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                  },
                  {
                    "id": 7,
                    "dish": "Value Combo: 2 Garlic breads and cold drink",        
                    "stars": 5.0,
                    "price":198,
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                    },
                    {
                      "id": 8,
                      "dish": "Value Combo: 2 Choco lava cake",        
                      "stars": 4.0,
                      "price":110,
                      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                      },
                      
    ])
  }
  
  }
  

