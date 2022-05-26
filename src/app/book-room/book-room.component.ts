import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookRoomService } from './book-room.service'
import { Router, ActivatedRoute } from '@angular/router'
import { ServiceDisplayService } from '../services-display/service-display.service'
@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {

  constructor(private bookRoom: BookRoomService, private route: ActivatedRoute, private serviceDisplay: ServiceDisplayService) { }
  roomService: any;
  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: any) => this.bookRoom.getRooms()
          .subscribe(rooms =>this.roomService=rooms))


  

  }

}
