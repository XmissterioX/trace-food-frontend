import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CratesSupplierComponent } from './crates-supplier.component';

describe('CratesSupplierComponent', () => {
  let component: CratesSupplierComponent;
  let fixture: ComponentFixture<CratesSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CratesSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CratesSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
