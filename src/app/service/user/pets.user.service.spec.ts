import { TestBed } from '@angular/core/testing';

import { PetsUserService } from './pets.user.service';

describe('PetsUserService', () => {
  let service: PetsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
