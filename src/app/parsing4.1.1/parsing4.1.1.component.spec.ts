import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parsing411Component } from './parsing4.1.1.component';

describe('Parsing411Component', () => {
  let component: Parsing411Component;
  let fixture: ComponentFixture<Parsing411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parsing411Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parsing411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
