import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuUrl="http://localhost:1200/menu";
  constructor(private http:HttpClient) { }
/**
 *@returns jsonObject
 */
getMenus(){
  return this.http.get<any>(this.menuUrl);
 }

   /**
   * @param restaurant
   */
  updateMenu(Menu){
    return this.http.put<void>(`${this.menuUrl}/${Menu._id}`,Menu);
  }
  /**
   * @param restaurant
   */
  deleteMenu(Menu){
    return this.http.delete<void>(`${this.menuUrl}/${Menu._id}`,Menu);
  }
  /**
   * @param restaurant
   */
  addMenu(Menu){
    return this.http.post<void>(`${this.menuUrl}`,Menu);
  }
}
