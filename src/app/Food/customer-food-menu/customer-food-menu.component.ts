import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit, Input } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';
import { DataService } from 'src/app/Services/data.service';
import { Food } from 'src/app/Model/food';

@Component({
  selector: 'app-customer-food-menu',
  templateUrl: './customer-food-menu.component.html',
  styleUrls: ['./customer-food-menu.component.css']
})
export class CustomerFoodMenuComponent implements OnInit {
 
  foodsData: Array<Food> = new Array<Food>();

  constructor(
    private _foodService: FoodService,
    private _dataService: DataService

  ) {

  }

  ngOnInit() {

    this._foodService.getFoodList().subscribe((response: any) => {
      this.foodsData = response;
    });
  }

  orderThisFood(food: Food) {
    this._dataService.addOrderedFood(food);
   

   
  }

}
