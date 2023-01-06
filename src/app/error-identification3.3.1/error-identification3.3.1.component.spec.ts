import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorIdentification331Component } from './error-identification3.3.1.component';

describe('ErrorIdentification331Component', () => {
  let component: ErrorIdentification331Component;
  let fixture: ComponentFixture<ErrorIdentification331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorIdentification331Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorIdentification331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
