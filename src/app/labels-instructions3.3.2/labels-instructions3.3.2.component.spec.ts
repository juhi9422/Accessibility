import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsInstructions332Component } from './labels-instructions3.3.2.component';

describe('LabelsInstructions332Component', () => {
  let component: LabelsInstructions332Component;
  let fixture: ComponentFixture<LabelsInstructions332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelsInstructions332Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelsInstructions332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
