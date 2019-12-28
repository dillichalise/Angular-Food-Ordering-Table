import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit, Input } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';
import { BillComponent } from '../bill/bill.component';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-customer-food-menu',
  templateUrl: './customer-food-menu.component.html',
  styleUrls: ['./customer-food-menu.component.css']
})
export class CustomerFoodMenuComponent implements OnInit {



  foodsData: any[];
  public name: string;
  public price: number;
  public id: number;
  public sum = 0;


  constructor(
    private _foodService: FoodService,
    private _dataService: DataService

  ) {
    this.foodsData = [];

  }

  ngOnInit() {

    this._foodService.getFoodList().subscribe((response: any) => {
      this.foodsData = response;
    });
  }

  orderThisFood(price: number, name: string, id: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.sum = this.sum + price;

    console.log(this.name);
    console.log(this.id);
    console.log(this.price);
    console.log(this.sum);



    this._dataService.setOption('name', this.name);
    this._dataService.setOption('price', this.price);
    this._dataService.setOption('total', this.sum);




    // this._foodService.passOrderedItem(id, name, price);


  }

}
