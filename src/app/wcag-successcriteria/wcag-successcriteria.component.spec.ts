import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcagSuccesscriteriaComponent } from './wcag-successcriteria.component';

describe('WcagSuccesscriteriaComponent', () => {
  let component: WcagSuccesscriteriaComponent;
  let fixture: ComponentFixture<WcagSuccesscriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcagSuccesscriteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcagSuccesscriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
