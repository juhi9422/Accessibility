import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPrevention334Component } from './error-prevention3.3.4.component';

describe('ErrorPrevention334Component', () => {
  let component: ErrorPrevention334Component;
  let fixture: ComponentFixture<ErrorPrevention334Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPrevention334Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPrevention334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
