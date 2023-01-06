import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSuggestion333Component } from './error-suggestion3.3.3.component';

describe('ErrorSuggestion333Component', () => {
  let component: ErrorSuggestion333Component;
  let fixture: ComponentFixture<ErrorSuggestion333Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSuggestion333Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorSuggestion333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
