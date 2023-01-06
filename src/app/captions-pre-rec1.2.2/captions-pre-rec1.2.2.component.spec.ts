import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionsPreRec122Component } from './captions-pre-rec1.2.2.component';

describe('CaptionsPreRec122Component', () => {
  let component: CaptionsPreRec122Component;
  let fixture: ComponentFixture<CaptionsPreRec122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptionsPreRec122Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptionsPreRec122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
