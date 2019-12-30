import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';
import { DataService } from 'src/app/Services/data.service';
import { Food } from 'src/app/Model/food';

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
  foodsData: Food[] = [];
  public totalprice = 0;
  public price: number;


  constructor(
    public _foodService: FoodService,
    public _dataService: DataService
  ) {
 
   }

  ngOnInit() {
    this._dataService.foodListObservable.subscribe(value => {
      this.foodsData = value;
      console.log('Orders are', value);
      // this.totalprice = this.totalprice;
      // console.log(this.totalprice)

    });

  }

  calculateTotal(price){
    this.price = price;
    this.totalprice = this.totalprice + price;
    console.log(this.totalprice);
    
      
  }

}
