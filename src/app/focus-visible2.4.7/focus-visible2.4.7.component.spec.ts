import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusVisible247Component } from './focus-visible2.4.7.component';

describe('FocusVisible247Component', () => {
  let component: FocusVisible247Component;
  let fixture: ComponentFixture<FocusVisible247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusVisible247Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusVisible247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
