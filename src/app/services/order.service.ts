import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl="http://localhost:1200/order";
  constructor(private http:HttpClient) { }
  /**
   *@returns jsonObject
   */
  getOrder(){
    return this.http.get<any>(this.orderUrl);
  }
  /**
   * @param order
   */
  updateOrder(order){
    return this.http.put<void>(`${this.orderUrl}/${order._id}`,order);
  }
  /**
   * @param order
   */
  deleteOrder(order){
    return this.http.delete<void>(`${this.orderUrl}/${order._id}`,order);
  }
  /**
   * @param order
   */
  addOrder(order){
    return this.http.post<void>(`${this.orderUrl}`,order);
  }
}
