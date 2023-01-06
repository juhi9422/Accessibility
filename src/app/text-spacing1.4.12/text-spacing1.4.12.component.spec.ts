import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSpacing1412Component } from './text-spacing1.4.12.component';

describe('TextSpacing1412Component', () => {
  let component: TextSpacing1412Component;
  let fixture: ComponentFixture<TextSpacing1412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSpacing1412Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSpacing1412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
