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
   * @param Menu
   */
  updateMenu(Menu){
    return this.http.get<any>(`${this.menuUrl}/${Menu._id}`,Menu);
  }
  getMenuById(Menu){
    return this.http.get<any>(`${this.menuUrl}/res/${Menu._id}`,Menu);
  }

  /**
   * @param Menu
   */
  addMenu(Menu){
    return this.http.post<void>(`${this.menuUrl}`,Menu);
  }
  /**
   *
   * @param Menu
   */
  deleteMenu(Menu){
    return this.http.delete<void>(`${this.menuUrl}/${Menu._id}`,Menu);
  }
}
