import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headinglabel246Component } from './headinglabel2.4.6.component';

describe('Headinglabel246Component', () => {
  let component: Headinglabel246Component;
  let fixture: ComponentFixture<Headinglabel246Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Headinglabel246Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headinglabel246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
