import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  private customerUrl="http://localhost:1200/client";
  /**
   * @returns jsonObject
   */
  getCustomer(){
    return this.http.get<any>(this.customerUrl);
   }
  /**
   * @param Customer
   */
  deleteCustomer(Customer){
    return this.http.delete<void>(`${this.customerUrl}/${Customer._id}`,Customer);
  }
}
