import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseofColor141Component } from './useof-color1.4.1.component';

describe('UseofColor141Component', () => {
  let component: UseofColor141Component;
  let fixture: ComponentFixture<UseofColor141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseofColor141Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseofColor141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
