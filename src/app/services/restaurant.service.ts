import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurantUrl="http://localhost:1200/res";
  constructor(private http:HttpClient) { }
  /**
   *@returns json data
   */
  getrestaurant(){
    return this.http.get<any>(this.restaurantUrl);
  }
  /**
   * @param restaurant
   */
  updateRestaurant(restaurant){
    return this.http.put<void>(`${this.restaurantUrl}/${restaurant._id}`,restaurant);
  }
  /**
   * @param restaurant
   */
  deleteRestaurant(restaurant){
    return this.http.delete<void>(`${this.restaurantUrl}/${restaurant._id}`,restaurant);
  }
  /**
   * @param restaurant
   */
  addRestaurant(restaurant){
    return this.http.post<void>(`${this.restaurantUrl}`,restaurant);
  }
}
