import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioAndRadioGroupsComponent } from './radio-and-radio-groups.component';

describe('RadioAndRadioGroupsComponent', () => {
  let component: RadioAndRadioGroupsComponent;
  let fixture: ComponentFixture<RadioAndRadioGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioAndRadioGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioAndRadioGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
