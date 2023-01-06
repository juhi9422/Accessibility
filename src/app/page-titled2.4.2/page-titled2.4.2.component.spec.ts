import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitled242Component } from './page-titled2.4.2.component';

describe('PageTitled242Component', () => {
  let component: PageTitled242Component;
  let fixture: ComponentFixture<PageTitled242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTitled242Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTitled242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
