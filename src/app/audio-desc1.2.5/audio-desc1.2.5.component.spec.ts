import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioDesc125Component } from './audio-desc1.2.5.component';

describe('AudioDesc125Component', () => {
  let component: AudioDesc125Component;
  let fixture: ComponentFixture<AudioDesc125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioDesc125Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioDesc125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
