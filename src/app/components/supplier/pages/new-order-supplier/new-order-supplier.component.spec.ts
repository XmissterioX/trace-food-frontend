import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderSupplierComponent } from './new-order-supplier.component';

describe('NewOrderSupplierComponent', () => {
  let component: NewOrderSupplierComponent;
  let fixture: ComponentFixture<NewOrderSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
