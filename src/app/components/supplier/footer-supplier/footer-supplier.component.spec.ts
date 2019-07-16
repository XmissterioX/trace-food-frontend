import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSupplierComponent } from './footer-supplier.component';

describe('FooterSupplierComponent', () => {
  let component: FooterSupplierComponent;
  let fixture: ComponentFixture<FooterSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
