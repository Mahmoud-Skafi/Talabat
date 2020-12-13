import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurantUrl="http://localhost:1200/res";
  private updateRestaurantUrl="http://localhost:1200/res"
  constructor(private http:HttpClient) { }

  getrestaurant(){
    return this.http.get<any>(this.restaurantUrl);
  }
  updateRestaurant(restaurant){
    return this.http.put<void>(`${this.restaurantUrl}/${restaurant._id}`,restaurant);
  }
}
