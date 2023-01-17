import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StoriaItaliaComponent } from "./storia-italia.component";

describe("StoriaItaliaComponent", () => {
  let component: StoriaItaliaComponent;
  let fixture: ComponentFixture<StoriaItaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoriaItaliaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoriaItaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
