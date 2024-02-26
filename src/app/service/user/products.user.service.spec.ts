import { TestBed } from '@angular/core/testing';

import { ProductsUserService } from './products.user.service';

describe('ProductsUserService', () => {
  let service: ProductsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
