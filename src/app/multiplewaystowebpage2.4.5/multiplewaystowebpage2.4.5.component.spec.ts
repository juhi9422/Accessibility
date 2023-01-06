import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiplewaystowebpage245Component } from './multiplewaystowebpage2.4.5.component';

describe('Multiplewaystowebpage245Component', () => {
  let component: Multiplewaystowebpage245Component;
  let fixture: ComponentFixture<Multiplewaystowebpage245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Multiplewaystowebpage245Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multiplewaystowebpage245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
