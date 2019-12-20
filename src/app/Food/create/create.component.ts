import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Food } from 'src/app/Model/food';
import { FoodService } from 'src/app/Services/food.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FoodPosts } from 'src/app/Model/foodPost';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  foodForm: FormGroup;
  submitted = false;
  panelTitle: string;

  food: Food = new Food();
  // food: Food = {
  //   id: null,
  //   foodName: null,
  //   foodPrice: null
  // };

  constructor(
    private formBuilder: FormBuilder,
    private _foodService: FoodService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.foodForm = this.formBuilder.group({
      'name': [this.food.name, [Validators.required]],
      'price': [this.food.price, [Validators.required]]
    });
  }

  // public getallfood: Food[] = [];

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getFood(id);
    });

  //   this.foodForm = this.formBuilder.group({
  //     id: [''],
  //     name: [''],
  //     price: ['']
  //   });

  //   this._foodService.getFoodList().subscribe(data => {
  //     this.food = data;
  //   });
  }

  private getFood(id: number) {
    if (id == 0) {
      this.food = {
        id: null,
        name: null,
        price: null
      };
      this.panelTitle = 'Create Food';
    }
    else {
      this._foodService.getFood(id).subscribe(
        (food) => { this.food = this.food; }
      );
      this.panelTitle = 'Edit Food';
    }
  }

  get easy() {
    return this.foodForm.controls;
  }

  SubmitData(postValues) {
    this.submitted = true;
    this.foodForm.reset();
    if (this.food.id == null) {
      this._foodService.addFood(postValues).subscribe(
        (data) => {
          console.log(data);
          this._router.navigate(['list']);
        }
      );
    } else{
      this._foodService.updateFood(postValues).subscribe(
        () => {
          this.foodForm.reset();
          this._router.navigate(['list']);
        }
      )
    }

  }

  // logFormValue(postValues) {
  //   this.submitted = true;
  //   this.foodForm.reset();

  //   this._foodService.addFood(postValues).subscribe(
  //     () => {
  //       console.log(postValues);
  //     });
  //   this._router.navigate(['list']);

  // }
}
