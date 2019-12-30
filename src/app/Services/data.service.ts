import { Injectable } from "@angular/core";
import { Food } from '../Model/food';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
    private updateListener = new BehaviorSubject<any>(null);
    foodListObservable = this.updateListener.asObservable();

    private orderedFoodList: Array<Food> = new Array<Food>();

    addOrderedFood(food: Food) {
        this.orderedFoodList.push(food);
        this.updateListener.next(this.orderedFoodList);
    
        
    }

    getFoodList(): Array<Food> {
        return this.orderedFoodList;
    }
}
