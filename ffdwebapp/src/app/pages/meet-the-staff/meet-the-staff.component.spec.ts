import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheStaffComponent } from './meet-the-staff.component';

describe('MeetTheStaffComponent', () => {
  let component: MeetTheStaffComponent;
  let fixture: ComponentFixture<MeetTheStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetTheStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetTheStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
