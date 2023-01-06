import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageofText145Component } from './imageof-text1.4.5.component';

describe('ImageofText145Component', () => {
  let component: ImageofText145Component;
  let fixture: ComponentFixture<ImageofText145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageofText145Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageofText145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
