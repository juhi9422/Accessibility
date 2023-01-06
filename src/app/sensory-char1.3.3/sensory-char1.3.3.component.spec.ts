import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoryChar133Component } from './sensory-char1.3.3.component';

describe('SensoryChar133Component', () => {
  let component: SensoryChar133Component;
  let fixture: ComponentFixture<SensoryChar133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensoryChar133Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensoryChar133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
