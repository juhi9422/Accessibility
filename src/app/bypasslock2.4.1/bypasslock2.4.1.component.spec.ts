import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bypasslock241Component } from './bypasslock2.4.1.component';

describe('Bypasslock241Component', () => {
  let component: Bypasslock241Component;
  let fixture: ComponentFixture<Bypasslock241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bypasslock241Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bypasslock241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
