import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPurpose244Component } from './link-purpose2.4.4.component';

describe('LinkPurpose244Component', () => {
  let component: LinkPurpose244Component;
  let fixture: ComponentFixture<LinkPurpose244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkPurpose244Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkPurpose244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
