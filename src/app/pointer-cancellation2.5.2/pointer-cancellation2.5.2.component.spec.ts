import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerCancellation252Component } from './pointer-cancellation2.5.2.component';

describe('PointerCancellation252Component', () => {
  let component: PointerCancellation252Component;
  let fixture: ComponentFixture<PointerCancellation252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointerCancellation252Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointerCancellation252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
