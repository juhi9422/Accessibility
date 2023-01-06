import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioDescMediaAlt123Component } from './audio-desc-media-alt1.2.3.component';

describe('AudioDescMediaAlt123Component', () => {
  let component: AudioDescMediaAlt123Component;
  let fixture: ComponentFixture<AudioDescMediaAlt123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioDescMediaAlt123Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioDescMediaAlt123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
