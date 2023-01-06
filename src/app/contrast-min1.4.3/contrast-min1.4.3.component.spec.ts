import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrastMin143Component } from './contrast-min1.4.3.component';

describe('ContrastMin143Component', () => {
  let component: ContrastMin143Component;
  let fixture: ComponentFixture<ContrastMin143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContrastMin143Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContrastMin143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
