import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantResultComponent } from './consultant-result.component';

describe('ConsultantResultComponent', () => {
  let component: ConsultantResultComponent;
  let fixture: ComponentFixture<ConsultantResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultantResultComponent]
    });
    fixture = TestBed.createComponent(ConsultantResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
