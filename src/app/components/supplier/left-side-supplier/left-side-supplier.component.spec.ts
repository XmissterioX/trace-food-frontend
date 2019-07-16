import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideSupplierComponent } from './left-side-supplier.component';

describe('LeftSideSupplierComponent', () => {
  let component: LeftSideSupplierComponent;
  let fixture: ComponentFixture<LeftSideSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSideSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
