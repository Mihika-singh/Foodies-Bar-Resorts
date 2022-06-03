import { TestBed } from '@angular/core/testing';

import { FoodsDetailService } from './foods-detail/foods-detail.service';

describe('FoodsDetailService', () => {
  let service: FoodsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
