import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInput322Component } from './on-input3.2.2.component';

describe('OnInput322Component', () => {
  let component: OnInput322Component;
  let fixture: ComponentFixture<OnInput322Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnInput322Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnInput322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
