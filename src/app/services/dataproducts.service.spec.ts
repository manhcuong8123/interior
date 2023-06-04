import { TestBed } from '@angular/core/testing';

import { DataproductsService } from './dataproducts.service';

describe('DataproductsService', () => {
  let service: DataproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
