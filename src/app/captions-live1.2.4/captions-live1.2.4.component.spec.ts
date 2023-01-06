import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionsLive124Component } from './captions-live1.2.4.component';

describe('CaptionsLive124Component', () => {
  let component: CaptionsLive124Component;
  let fixture: ComponentFixture<CaptionsLive124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptionsLive124Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptionsLive124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
