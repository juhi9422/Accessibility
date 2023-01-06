import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterKEyShortcuts214Component } from './character-key-shortcuts2.1.4.component';

describe('CharacterKEyShortcuts214Component', () => {
  let component: CharacterKEyShortcuts214Component;
  let fixture: ComponentFixture<CharacterKEyShortcuts214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterKEyShortcuts214Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterKEyShortcuts214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
