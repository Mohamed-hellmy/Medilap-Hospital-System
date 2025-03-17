import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpatientsappointmentsComponent } from './doctorpatientsappointments.component';

describe('DoctorpatientsappointmentsComponent', () => {
  let component: DoctorpatientsappointmentsComponent;
  let fixture: ComponentFixture<DoctorpatientsappointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorpatientsappointmentsComponent]
    });
    fixture = TestBed.createComponent(DoctorpatientsappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
