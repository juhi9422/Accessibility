import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioControl142Component } from './audio-control1.4.2.component';

describe('AudioControl142Component', () => {
  let component: AudioControl142Component;
  let fixture: ComponentFixture<AudioControl142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioControl142Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioControl142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
