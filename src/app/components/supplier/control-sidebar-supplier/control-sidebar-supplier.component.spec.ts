import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSidebarSupplierComponent } from './control-sidebar-supplier.component';

describe('ControlSidebarSupplierComponent', () => {
  let component: ControlSidebarSupplierComponent;
  let fixture: ComponentFixture<ControlSidebarSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlSidebarSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSidebarSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
