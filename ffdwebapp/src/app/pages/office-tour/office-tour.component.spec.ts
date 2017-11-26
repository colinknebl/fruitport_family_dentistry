import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeTourComponent } from './office-tour.component';

describe('OfficeTourComponent', () => {
  let component: OfficeTourComponent;
  let fixture: ComponentFixture<OfficeTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
