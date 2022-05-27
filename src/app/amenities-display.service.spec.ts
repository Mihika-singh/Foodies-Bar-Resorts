import { TestBed } from '@angular/core/testing';

import { AmenitiesDisplayService } from './amenities-display.service';

describe('AmenitiesDisplayService', () => {
  let service: AmenitiesDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmenitiesDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
