import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CratesRestaurantComponent } from './crates-restaurant.component';

describe('CratesRestaurantComponent', () => {
  let component: CratesRestaurantComponent;
  let fixture: ComponentFixture<CratesRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CratesRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CratesRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
