import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  //  name: ;
  //  id: number;
  //  public price;
  // title: string;
  // public name;
  public data;
  foodsData: any[];
  

  constructor(
    public _foodService: FoodService,
    public _dataService: DataService
  ) {

    this._foodService = _foodService;
    this.data = _dataService.getOption();
    this.foodsData = [];
 
   }

  ngOnInit() {
  }



  

}
