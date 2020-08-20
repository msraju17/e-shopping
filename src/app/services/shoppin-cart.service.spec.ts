import { TestBed } from '@angular/core/testing';

import { ShoppinCartService } from './shoppin-cart.service';

describe('ShoppinCartService', () => {
  let service: ShoppinCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppinCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
