import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, pipe } from 'rxjs';
import { map,filter } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class BookTableService {

  constructor() { }
   
  getRoom(id:number){
    return this.getTables()
.pipe
(map(Tables=>{return  Tables.filter(Table=>Table.id===id)[0]
})
)
}
  getTables(){
    return of
    ([{
      "id": 0,
      "Title": "Roof top",        
     
      "price":500,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPa_hPdCKj9-2qkadR9uEwVCC4e2Vu2ad3g&usqp=CAU",
       
    },
    {
    "id": 1,
    "Title": "Full family full big Sofa",        
     
    "price":700,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmcqmZRVVFJlHM7HMHg1zn6n_nCoUEE7oCA&usqp=CAU"
    },

  ])
  }
}
