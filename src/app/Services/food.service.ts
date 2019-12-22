import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../Model/food';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

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

  addFood(food: Food): Observable<Food> {
    return this.httpClient.post<Food>(`${this.baseUrl}`, food);

  }

  updateFood(food: Food): Observable<Food> {
    return this.httpClient.put<Food>(`${this.baseUrl}${food.id}`, food);
  }

  deleteFood(id: number): Observable<Food> {
    return this.httpClient.delete<Food>(`${this.baseUrl}${id}`);
  }



}
