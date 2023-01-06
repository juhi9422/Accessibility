import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsistentIdenti324Component } from './consistent-identi3.2.4.component';

describe('ConsistentIdenti324Component', () => {
  let component: ConsistentIdenti324Component;
  let fixture: ComponentFixture<ConsistentIdenti324Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsistentIdenti324Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsistentIdenti324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
