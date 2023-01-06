import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimimgAdjust221Component } from './timimg-adjust2.2.1.component';

describe('TimimgAdjust221Component', () => {
  let component: TimimgAdjust221Component;
  let fixture: ComponentFixture<TimimgAdjust221Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimimgAdjust221Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimimgAdjust221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
