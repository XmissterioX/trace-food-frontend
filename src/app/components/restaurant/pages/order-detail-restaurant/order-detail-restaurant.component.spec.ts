import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailRestaurantComponent } from './order-detail-restaurant.component';

describe('OrderDetailRestaurantComponent', () => {
  let component: OrderDetailRestaurantComponent;
  let fixture: ComponentFixture<OrderDetailRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
