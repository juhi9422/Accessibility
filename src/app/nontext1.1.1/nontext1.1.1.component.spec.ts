import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nontext111Component } from './nontext1.1.1.component';

describe('Nontext111Component', () => {
  let component: Nontext111Component;
  let fixture: ComponentFixture<Nontext111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nontext111Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nontext111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
