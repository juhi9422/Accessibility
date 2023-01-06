import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningfulSeq132Component } from './meaningful-seq1.3.2.component';

describe('MeaningfulSeq132Component', () => {
  let component: MeaningfulSeq132Component;
  let fixture: ComponentFixture<MeaningfulSeq132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeaningfulSeq132Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeaningfulSeq132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
