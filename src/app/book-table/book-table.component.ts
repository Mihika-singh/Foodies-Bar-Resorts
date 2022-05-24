import { Component, OnInit } from '@angular/core';
import {BookTableService} from './book-table.service'
@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  constructor(private bookTable:BookTableService) { }
Tables:any;
  ngOnInit(): void {
    this.bookTable.getTables()
    .subscribe(Tables=>this.Tables=Tables)
  }

}
