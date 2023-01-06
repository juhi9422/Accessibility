import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageofPage311Component } from './languageof-page3.1.1.component';

describe('LanguageofPage311Component', () => {
  let component: LanguageofPage311Component;
  let fixture: ComponentFixture<LanguageofPage311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageofPage311Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageofPage311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
