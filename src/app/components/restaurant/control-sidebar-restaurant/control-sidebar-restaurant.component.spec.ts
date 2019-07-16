import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSidebarRestaurantComponent } from './control-sidebar-restaurant.component';

describe('ControlSidebarRestaurantComponent', () => {
  let component: ControlSidebarRestaurantComponent;
  let fixture: ComponentFixture<ControlSidebarRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlSidebarRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSidebarRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
