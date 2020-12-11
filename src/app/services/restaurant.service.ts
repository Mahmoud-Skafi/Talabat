import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantUrl="http://localhost:1200/res";
  constructor(private http:HttpClient) { }
  getrestaurant(){
    return this.http.get<any>(this.restaurantUrl);
  }
}
