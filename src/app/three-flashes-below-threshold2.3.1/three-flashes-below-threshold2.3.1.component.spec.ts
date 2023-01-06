import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeFlashesBelowThreshold231Component } from './three-flashes-below-threshold2.3.1.component';

describe('ThreeFlashesBelowThreshold231Component', () => {
  let component: ThreeFlashesBelowThreshold231Component;
  let fixture: ComponentFixture<ThreeFlashesBelowThreshold231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeFlashesBelowThreshold231Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeFlashesBelowThreshold231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
