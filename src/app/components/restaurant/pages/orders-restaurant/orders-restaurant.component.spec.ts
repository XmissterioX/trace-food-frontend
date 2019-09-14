import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersRestaurantComponent } from './orders-restaurant.component';

describe('OrdersRestaurantComponent', () => {
  let component: OrdersRestaurantComponent;
  let fixture: ComponentFixture<OrdersRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
