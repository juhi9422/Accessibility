import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnFocus321Component } from './on-focus3.2.1.component';

describe('OnFocus321Component', () => {
  let component: OnFocus321Component;
  let fixture: ComponentFixture<OnFocus321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnFocus321Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnFocus321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
