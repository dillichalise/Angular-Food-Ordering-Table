import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  foodsData: [];
  
  public sum = 0;


  constructor(
    private _foodService: FoodService,
    private _router: Router,

  ) {
    this.foodsData = [];

  }

  ngOnInit() {
    this.listAllFoods();
  }

  listAllFoods() {
    this._foodService.getFoodList().subscribe((response: any) => {
      this.foodsData = response;
    });
  }

  delete(id: number) {
    this._foodService.deleteFood(id).subscribe(data => {
      console.log(data);
      this.listAllFoods();
    })
  }

  ClearForm() {
    this.listAllFoods();
    // this._router.navigate(['list']);
  }


  orderThisFood(price: number) {
    console.log(price);
    this.sum = this.sum+price;
  }
  

  listOrderedFood() {


  }


  // viewFood(){
  //  this._router.navigate(['/viewFood', this.foodsData.id])
  // }

}
