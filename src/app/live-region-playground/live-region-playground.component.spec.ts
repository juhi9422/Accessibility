import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveRegionPlaygroundComponent } from './live-region-playground.component';

describe('LiveRegionPlaygroundComponent', () => {
  let component: LiveRegionPlaygroundComponent;
  let fixture: ComponentFixture<LiveRegionPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveRegionPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveRegionPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
