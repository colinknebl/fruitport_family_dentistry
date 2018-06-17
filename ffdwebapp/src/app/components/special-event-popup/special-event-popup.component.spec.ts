import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEventPopupComponent } from './special-event-popup.component';

describe('SpecialEventPopupComponent', () => {
  let component: SpecialEventPopupComponent;
  let fixture: ComponentFixture<SpecialEventPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialEventPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialEventPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
