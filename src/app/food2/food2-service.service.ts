import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Food2ServiceService {

  constructor() { }
  getSouth(id:number){
    return this.getSouthIn()
.pipe(
  map(SouthIn => {
    return SouthIn.filter(SouthI => SouthI.id === id)[0]
  })
  )
    }
getSouthIn(){
  return of([
    {
    "id": 0,
    "dish": "Plain dosa",        
    "stars": 3.6,
    "price":120,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
    },
    {
      "id": 1,
      "dish": "Masala dosa",        
      "stars": 4.5,
      "price":140,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 2,
        "dish": "Rawa dosa",        
        "stars": 4.0,
        "price":160,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
        },
        {
          "id": 3,
          "dish":  "Rawa Masala dosa",        
          "stars": 4.6,
          "price":110,
          "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
          },
          {
            "id": 4,
            "dish": "Mysore Masala dosa",        
            "stars": 4.2,
            "price":40,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
            },
            {
              "id": 5,
              "dish": "Paneer dosa",        
              "stars": 4.0,
              "price":130,
              "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
              },
              {
                "id": 6,
                "dish": "Paneer Masala dosa",        
                "stars": 3.7,
                "price":190,
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                },
                {
                  "id": 7,
                  "dish": "Sambhar bada",        
                  "stars": 5.0,
                  "price":110,
                  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                  },
                  {
                    "id": 8,
                    "dish": "Idli",        
                    "stars": 4.0,
                    "price":110,
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                    },
                    
  ])
}

}


