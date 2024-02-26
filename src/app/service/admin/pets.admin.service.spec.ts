import { TestBed } from '@angular/core/testing';

import { PetsAdminService } from './pets.admin.service';

describe('PetsAdminService', () => {
  let service: PetsAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
