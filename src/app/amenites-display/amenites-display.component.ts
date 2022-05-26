import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AmenitiesDisplayService } from './amenities-display.service';
@Component({
  selector: 'app-amenites-display',
  templateUrl: './amenites-display.component.html',
  styleUrls: ['./amenites-display.component.css']
})
export class AmenitesDisplayComponent implements OnInit {

  constructor(private amenity: AmenitiesDisplayService, private route: ActivatedRoute, private zone: NgZone) { }
openAmenityID:any=null;
  amenities: any;
  open = false;
  selectedId = 0;
  up = false;
  down = true;
  ngOnInit(): void {
    this.amenity.getAmenities()
      .subscribe((amenities: any) => this.amenities = amenities)

  }
  onClick() {
 



  }


}
