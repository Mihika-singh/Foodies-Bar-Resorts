import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Food4Service {

  constructor() { }
  getCheesy(id:number){
    return this.getChinese()
    .pipe(
      map(chinese=>{
return chinese.filter( cheesy => cheesy.id === id)[0]
      } )
    )
  }
  getChinese(){
    return of([
      {
      "id": 0,
      "dish": "Veg Momos",        
      "stars": 4.0,
      "price":99,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
      },
      {
        "id": 1,
        "dish": "Paneer Momos",        
        "stars": 4.5,
        "price":125,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
        },
        {
          "id": 2,
          "dish": "Paneer Crunchy fried Momos",        
          "stars": 4.5,
          "price":165,
          "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
          },
          {
            "id": 3,
            "dish":  "Onion creamy fried Momos",        
            "stars": 4.6,
            "price":179,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
            },
            {
              "id": 4,
              "dish": "Paneer grilled Momos",        
              "stars": 4.2,
              "price":169,
              "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
              },
              {
                "id": 5,
                "dish": "Fried Momos",        
                "stars": 4.0,
                "price":130,
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                },
                {
                  "id": 6,
                  "dish": "Cheesy burger",        
                  "stars": 4.0,
                  "price":115,
                  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                  },
                  {
                    "id": 7,
                    "dish": "Value Combo: Manchurian , Fried rice and Noodles ",        
                    "stars": 5.0,
                    "price":210,
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                    },
                    {
                      "id": 8,
                      "dish": "Hakka Noodles",        
                      "stars": 4.0,
                      "price":150,
                      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WTXXMiIDW8rltmNf_UAajdtpeL5zE74m0w&usqp=CAU",
                      },
                      
    ])
  }
  
  }
  

 
