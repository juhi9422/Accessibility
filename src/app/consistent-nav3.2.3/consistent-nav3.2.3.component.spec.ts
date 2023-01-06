import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsistentNav323Component } from './consistent-nav3.2.3.component';

describe('ConsistentNav323Component', () => {
  let component: ConsistentNav323Component;
  let fixture: ComponentFixture<ConsistentNav323Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsistentNav323Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsistentNav323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
