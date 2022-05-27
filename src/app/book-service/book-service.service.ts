import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  getBookService(id: number) {
    return this.getBookServices()
      .pipe(
        map(bookServices => {
          return bookServices.filter(bookService => bookService.id === id)[0]
        })
      )
  }
  getServiceType(route: string) {
    return this.getBookServices()
      .pipe(
        map(bookServices => {
          return bookServices.filter(bookServices => bookServices.route === route)
        })

      )

  }
  

  getBookServices() {
    return of([{
      "id": 0,
      "Title": "Deluxe:132 sq",
      "stars": 4.0,
      "price": 690,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCk1cOdj9z63vehX0SdAFtPmEXUbK6Ue8-xQ&usqp=CAU",
      "amenities": "TV , AC , Geyser, First-Aid",
      "route": 'rooms',
      "serviceType": "roomType",
    },
    {
      "id": 1,
      "Title": "3 Seater",
      "stars": 3.9,
      "price": 1100,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HBZEHxTr09wT5FN7jhVzcHlotWgIraoDGg&usqp=CAU",
      "amenities": "TV , AC , Geyser, First-Aid , Wifi",
      "route": 'rooms',
      "serviceType": "roomType",
    },
    {
      "id": 2,
      "Title": "Non-Ac",
      "stars": 4.0,
      "price": 530,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdjJQo5Rmncf4bUyYV-Ma-cLeJIW68pSPUA&usqp=CAU",
      "amenities": "TV , Geyser, First-Aid",
      "route": 'rooms',
      "serviceType": "roomType",
    },
    {
      "id": 3,
      "Title": "AC",
      "stars": 3.6,
      "price": 610,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepwmVa12snYnmMpGH6_5kTZ2pa80lHPSOAA&usqp=CAU",
      "amenities": "TV , AC , First-Aid",
      "route": 'rooms',
      "serviceType": "roomType",
    },
    {
      "id": 4,
      "Title": "Roof top",

      "price": 500,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPa_hPdCKj9-2qkadR9uEwVCC4e2Vu2ad3g&usqp=CAU",
      "route": 'tables',
      "serviceType": "tableType",
    },
    {
      "id": 5,
      "Title": "Full family full big Sofa",

      "price": 700,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmcqmZRVVFJlHM7HMHg1zn6n_nCoUEE7oCA&usqp=CAU",
      "route": 'tables',
      "serviceType": "tableType",
    },
    ])
  }
}
