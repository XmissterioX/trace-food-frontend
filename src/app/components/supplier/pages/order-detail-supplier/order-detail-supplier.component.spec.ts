import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailSupplierComponent } from './order-detail-supplier.component';

describe('OrderDetailSupplierComponent', () => {
  let component: OrderDetailSupplierComponent;
  let fixture: ComponentFixture<OrderDetailSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
