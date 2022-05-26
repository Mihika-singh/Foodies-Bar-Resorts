import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AmenitiesDisplayService {
  id: any;

  constructor() { }
  getAmenity(id: number) {
    return this.getAmenities()
      .pipe(
        map(amenities => {
          return amenities.filter(amenity => amenity.id === id)[0]
        })
      )
  }
  getAmenities() {
    return of([{
      "id": 0,
      "title": "Free Parking",
      "type": "Parking is another way to compete with short-term rentals. Some short-term rentals include parking space, so if your hotel’s parking comes at a fee, that's another reason for guests to opt for an Airbnb  We recommend doing some research on short-term rentals in your market to see what the parking trends are. The more upscale your hotel, the more guests will expect valet parking ",

    },
    {
      "id": 1,
      "title": "Rollaway Tents",
      "type": "Rollaway Tent: Let’s not forget about the youngest guests! Treat the little ones to memories of a lifetime with an above-average rollaway: a rollaway tent. This cool amenity is lots of fun for kids, and it gives parents some privacy when the whole family shares a room. For more brownie points,",
    }

    ])
  }
}
