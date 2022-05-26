import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookRoomService {

  constructor() { }
  getRoom(id: number) {
    return this.getRooms()
      .pipe
      (map(Rooms => {
        return Rooms.filter(Room => Room.id === id)[0]
      })
      )
  }
  getRooms() {
    return of([{
      "id": 0,
      "Title": "Deluxe:132 sq",
      "stars": 4.0,
      "price": 690,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCk1cOdj9z63vehX0SdAFtPmEXUbK6Ue8-xQ&usqp=CAU",
      "amenities": "TV , AC , Geyser, First-Aid"
    },
    {
      "id": 1,
      "Title": "3 Seater",
      "stars": 3.9,
      "price": 1100,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HBZEHxTr09wT5FN7jhVzcHlotWgIraoDGg&usqp=CAU",
      "amenities": "TV , AC , Geyser, First-Aid , Wifi"
    },
    {
      "id": 2,
      "Title": "Non-Ac",
      "stars": 4.0,
      "price": 530,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdjJQo5Rmncf4bUyYV-Ma-cLeJIW68pSPUA&usqp=CAU",
      "amenities": "TV , Geyser, First-Aid"
    },
    {
      "id": 3,
      "Title": "AC",
      "stars": 3.6,
      "price": 610,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepwmVa12snYnmMpGH6_5kTZ2pa80lHPSOAA&usqp=CAU",
      "amenities": "TV , AC , First-Aid"
    },

    ])
  }
}