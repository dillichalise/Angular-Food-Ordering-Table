import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFoodMenuComponent } from './customer-food-menu.component';

describe('CustomerFoodMenuComponent', () => {
  let component: CustomerFoodMenuComponent;
  let fixture: ComponentFixture<CustomerFoodMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFoodMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFoodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
