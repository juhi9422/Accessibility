import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveTextComponent } from './predictive-text.component';

describe('PredictiveTextComponent', () => {
  let component: PredictiveTextComponent;
  let fixture: ComponentFixture<PredictiveTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictiveTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictiveTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
