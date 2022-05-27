import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { BookServiceService } from './book-service.service';

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})
export class BookServiceComponent implements OnInit {

  constructor(private bookServices:BookServiceService,private route:ActivatedRoute) { }
bookService: any;
  ngOnInit(): void {
    this.route.queryParamMap
    .subscribe((qps:any) => {
      if (qps.has('serviceRoute')) {
        console.log(qps)
        this.bookServices.getServiceType(qps.get('serviceRoute'))
        .subscribe(services  => {
          this.bookService = services;
            

        })
    } 
      else{
        this.bookServices.getBookServices()
        .subscribe(services => {
          this.bookService = services;
        })
      }
    })
  }
  
  

 
}
