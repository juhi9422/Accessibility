import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRelation131Component } from './info-relation1.3.1.component';

describe('InfoRelation131Component', () => {
  let component: InfoRelation131Component;
  let fixture: ComponentFixture<InfoRelation131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRelation131Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRelation131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
