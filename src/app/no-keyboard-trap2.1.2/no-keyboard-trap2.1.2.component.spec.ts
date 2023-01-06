import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoKeyboardTrap212Component } from './no-keyboard-trap2.1.2.component';

describe('NoKeyboardTrap212Component', () => {
  let component: NoKeyboardTrap212Component;
  let fixture: ComponentFixture<NoKeyboardTrap212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoKeyboardTrap212Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoKeyboardTrap212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
