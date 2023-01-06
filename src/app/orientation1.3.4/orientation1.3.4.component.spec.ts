import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orientation134Component } from './orientation1.3.4.component';

describe('Orientation134Component', () => {
  let component: Orientation134Component;
  let fixture: ComponentFixture<Orientation134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orientation134Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orientation134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
