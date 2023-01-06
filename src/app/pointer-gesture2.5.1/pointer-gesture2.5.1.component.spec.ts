import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerGesture251Component } from './pointer-gesture2.5.1.component';

describe('PointerGesture251Component', () => {
  let component: PointerGesture251Component;
  let fixture: ComponentFixture<PointerGesture251Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointerGesture251Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointerGesture251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
