import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriaEventsComponent } from './storia-events.component';

describe('StoriaEventsComponent', () => {
  let component: StoriaEventsComponent;
  let fixture: ComponentFixture<StoriaEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriaEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriaEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
