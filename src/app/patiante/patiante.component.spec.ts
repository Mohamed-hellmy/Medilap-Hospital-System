import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatianteComponent } from './patiante.component';

describe('PatianteComponent', () => {
  let component: PatianteComponent;
  let fixture: ComponentFixture<PatianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatianteComponent]
    });
    fixture = TestBed.createComponent(PatianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
