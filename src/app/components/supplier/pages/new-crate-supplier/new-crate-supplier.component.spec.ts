import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCrateSupplierComponent } from './new-crate-supplier.component';

describe('NewCrateSupplierComponent', () => {
  let component: NewCrateSupplierComponent;
  let fixture: ComponentFixture<NewCrateSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCrateSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCrateSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
