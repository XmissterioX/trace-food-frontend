import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRestaurantComponent } from './footer-restaurant.component';

describe('FooterRestaurantComponent', () => {
  let component: FooterRestaurantComponent;
  let fixture: ComponentFixture<FooterRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
