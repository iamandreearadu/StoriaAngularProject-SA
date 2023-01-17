import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StoriaCaffeComponent } from "./storia-caffe.component";

describe("StoriaCaffeComponent", () => {
  let component: StoriaCaffeComponent;
  let fixture: ComponentFixture<StoriaCaffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoriaCaffeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoriaCaffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
