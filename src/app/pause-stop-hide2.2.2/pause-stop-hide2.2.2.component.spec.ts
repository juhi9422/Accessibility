import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseStopHide222Component } from './pause-stop-hide2.2.2.component';

describe('PauseStopHide222Component', () => {
  let component: PauseStopHide222Component;
  let fixture: ComponentFixture<PauseStopHide222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseStopHide222Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PauseStopHide222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
