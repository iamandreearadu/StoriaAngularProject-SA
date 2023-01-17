import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMapsComponent } from './contact.maps.component';

describe('ContactMapsComponent', () => {
  let component: ContactMapsComponent;
  let fixture: ComponentFixture<ContactMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
