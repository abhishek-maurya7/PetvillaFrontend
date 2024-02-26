import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsAdminComponent } from './pets.admin.component';

describe('PetsAdminComponent', () => {
  let component: PetsAdminComponent;
  let fixture: ComponentFixture<PetsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
