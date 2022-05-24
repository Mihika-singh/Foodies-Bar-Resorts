import { Component, OnInit } from '@angular/core';
import {BookRoomService} from './book-room.service'
@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {

  constructor(private bookRoom:BookRoomService) { }
Rooms:any;
  ngOnInit(): void {
this.bookRoom.getRooms()
.subscribe(Rooms=>this.Rooms=Rooms)
  }

}
