import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageofParts312Component } from './languageof-parts3.1.2.component';

describe('LanguageofParts312Component', () => {
  let component: LanguageofParts312Component;
  let fixture: ComponentFixture<LanguageofParts312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageofParts312Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageofParts312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
