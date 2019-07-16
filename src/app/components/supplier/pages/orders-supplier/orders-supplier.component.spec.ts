import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSupplierComponent } from './orders-supplier.component';

describe('OrdersSupplierComponent', () => {
  let component: OrdersSupplierComponent;
  let fixture: ComponentFixture<OrdersSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
