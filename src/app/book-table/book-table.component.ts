import { Component, OnInit } from '@angular/core';
import { BookTableService } from './book-table.service'
import { Router, ActivatedRoute } from '@angular/router'
import { ServiceDisplayService } from '../services-display/service-display.service'
@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  constructor(private bookTable: BookTableService, private route: ActivatedRoute, private serviceDisplay: ServiceDisplayService) { }
  Tables: any;
  service: any;
  ngOnInit(): void {

this.route.paramMap
    

    this.bookTable.getTables()
      .subscribe((table: any) => this.Tables = table)
  }



}
