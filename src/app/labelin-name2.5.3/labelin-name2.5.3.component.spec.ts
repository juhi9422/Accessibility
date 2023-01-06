import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelinName253Component } from './labelin-name2.5.3.component';

describe('LabelinName253Component', () => {
  let component: LabelinName253Component;
  let fixture: ComponentFixture<LabelinName253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelinName253Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelinName253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
