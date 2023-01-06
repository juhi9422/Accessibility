import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHoverFocus1413Component } from './content-hover-focus1.4.13.component';

describe('ContentHoverFocus1413Component', () => {
  let component: ContentHoverFocus1413Component;
  let fixture: ComponentFixture<ContentHoverFocus1413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentHoverFocus1413Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentHoverFocus1413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
