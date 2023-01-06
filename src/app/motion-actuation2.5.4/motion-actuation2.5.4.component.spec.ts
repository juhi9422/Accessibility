import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionActuation254Component } from './motion-actuation2.5.4.component';

describe('MotionActuation254Component', () => {
  let component: MotionActuation254Component;
  let fixture: ComponentFixture<MotionActuation254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotionActuation254Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotionActuation254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
