import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTextContrast1411Component } from './non-text-contrast1.4.11.component';

describe('NonTextContrast1411Component', () => {
  let component: NonTextContrast1411Component;
  let fixture: ComponentFixture<NonTextContrast1411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonTextContrast1411Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonTextContrast1411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
