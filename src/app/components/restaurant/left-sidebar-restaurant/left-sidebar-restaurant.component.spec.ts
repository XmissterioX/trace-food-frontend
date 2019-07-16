import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarRestaurantComponent } from './left-sidebar-restaurant.component';

describe('LeftSidebarRestaurantComponent', () => {
  let component: LeftSidebarRestaurantComponent;
  let fixture: ComponentFixture<LeftSidebarRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSidebarRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebarRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
