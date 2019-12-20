import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../Model/food';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { FoodPosts } from '../Model/foodPost';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:8086/v1/food/';

  getFoodList(): Observable<Food> {
    return this.httpClient.get<Food>(`${this.baseUrl}all`);
  }

  getFood(id: number): Observable<Food> {
    return this.httpClient.get<Food>(`${this.baseUrl}${id}`);
  }

  addFood(food: FoodPosts): Observable<FoodPosts> {
    return this.httpClient.post<FoodPosts>(`${this.baseUrl}`, food);

  }

  updateFood(food: FoodPosts): Observable<FoodPosts> {
    return this.httpClient.put<FoodPosts>(`${this.baseUrl}${food.id}`, food);
  }

  deleteFood(id: number): Observable<Food> {
    return this.httpClient.delete<Food>(`${this.baseUrl}${id}`);
  }



}
