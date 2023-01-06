import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeText144Component } from './resize-text1.4.4.component';

describe('ResizeText144Component', () => {
  let component: ResizeText144Component;
  let fixture: ComponentFixture<ResizeText144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeText144Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResizeText144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
