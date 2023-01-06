import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameRoleValue412Component } from './name-role-value4.1.2.component';

describe('NameRoleValue412Component', () => {
  let component: NameRoleValue412Component;
  let fixture: ComponentFixture<NameRoleValue412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameRoleValue412Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameRoleValue412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
