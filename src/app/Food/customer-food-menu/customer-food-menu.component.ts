import { Component, OnInit, EventEmitter } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-customer-food-menu',
  templateUrl: './customer-food-menu.component.html',
  styleUrls: ['./customer-food-menu.component.css']
})
export class CustomerFoodMenuComponent implements OnInit {
  foodsData: any;
  public sum = 0;


  constructor(
    private _foodService: FoodService,

  ) {
    this.foodsData = [];

   }

  ngOnInit() {

    this._foodService.getFoodList().subscribe((response: any) => {
      this.foodsData = response;
    });
  }

  orderThisFood(price: number) {
    console.log(price);
    this.sum = this.sum+price;

    
  }

}
