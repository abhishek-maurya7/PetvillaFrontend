import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsUserComponent } from './pets.user.component';

describe('PetsUserComponent', () => {
  let component: PetsUserComponent;
  let fixture: ComponentFixture<PetsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
