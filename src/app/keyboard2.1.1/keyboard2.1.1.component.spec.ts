import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyboard211Component } from './keyboard2.1.1.component';

describe('Keyboard211Component', () => {
  let component: Keyboard211Component;
  let fixture: ComponentFixture<Keyboard211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Keyboard211Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Keyboard211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
