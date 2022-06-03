import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service/book-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
book:any;
finalbook:any;
cancelbook:any;
  constructor(private bookService:BookServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap
    .subscribe((params)=>{
      const id=params.get('id') as string;
      return this.bookService.getBookService(+id)
        .subscribe(book => {
          this.book = book;
        });
    })
  }
finalBook(){
  
    alert('Are you sure you want to book?')
  this.finalbook=true;
  this.cancelbook=false;

}
cancelBooking(){
  if(this.finalbook===true){
    this.cancelbook=true;
    this.finalbook=false;
  }

}
}
function id(id: any) {
  throw new Error('Function not implemented.');
}

