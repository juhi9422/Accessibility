import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHierarchicalComponent } from './navigation-hierarchical.component';

describe('NavigationHierarchicalComponent', () => {
  let component: NavigationHierarchicalComponent;
  let fixture: ComponentFixture<NavigationHierarchicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationHierarchicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationHierarchicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
