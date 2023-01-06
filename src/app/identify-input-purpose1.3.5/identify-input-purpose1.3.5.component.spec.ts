import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyInputPurpose135Component } from './identify-input-purpose1.3.5.component';

describe('IdentifyInputPurpose135Component', () => {
  let component: IdentifyInputPurpose135Component;
  let fixture: ComponentFixture<IdentifyInputPurpose135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyInputPurpose135Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentifyInputPurpose135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
