import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMessage413Component } from './status-message4.1.3.component';

describe('StatusMessage413Component', () => {
  let component: StatusMessage413Component;
  let fixture: ComponentFixture<StatusMessage413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusMessage413Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusMessage413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
