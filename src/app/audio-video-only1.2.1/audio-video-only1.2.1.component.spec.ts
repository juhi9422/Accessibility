import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVideoOnly121Component } from './audio-video-only1.2.1.component';

describe('AudioVideoOnly121Component', () => {
  let component: AudioVideoOnly121Component;
  let fixture: ComponentFixture<AudioVideoOnly121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioVideoOnly121Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioVideoOnly121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
