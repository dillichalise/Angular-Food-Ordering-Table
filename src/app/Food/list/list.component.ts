import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  foodsData: any;

  constructor(
    private _foodService: FoodService,
  ) {
    this.foodsData=[];
   }

  ngOnInit() {
    this.listAllFoods();
  }

  listAllFoods(){
    this._foodService.getFoodList().subscribe((response: any) => {
        this.foodsData = response;
    });
  }

  delete(id: number){
    this._foodService.deleteFood(id).subscribe(data=>{
      console.log(data);
      this.listAllFoods();
    })
  }
 
 

  // viewFood(){
  //  this._router.navigate(['/viewFood', this.foodsData.id])
  // }

}
