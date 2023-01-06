import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusOrder243Component } from './focus-order2.4.3.component';

describe('FocusOrder243Component', () => {
  let component: FocusOrder243Component;
  let fixture: ComponentFixture<FocusOrder243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusOrder243Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusOrder243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
