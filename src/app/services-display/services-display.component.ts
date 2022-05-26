import { Component, OnInit } from '@angular/core';
// import {FoodDisplayService} from './food-display/food-display.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceDisplayService } from './service-display.service'
@Component({
  selector: 'app-services-display',
  templateUrl: './services-display.component.html',
  styleUrls: ['./services-display.component.css']
})
export class ServicesDisplayComponent implements OnInit {
  services: any;

  constructor(private serviceDisplay: ServiceDisplayService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
        this.serviceDisplay.getServices()
          .subscribe(services => this.services=services)
      }
  }


