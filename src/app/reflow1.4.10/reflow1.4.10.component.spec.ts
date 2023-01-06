import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reflow1410Component } from './reflow1.4.10.component';

describe('Reflow1410Component', () => {
  let component: Reflow1410Component;
  let fixture: ComponentFixture<Reflow1410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reflow1410Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reflow1410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
