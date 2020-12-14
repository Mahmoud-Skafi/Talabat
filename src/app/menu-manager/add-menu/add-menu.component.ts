import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {

  constructor(private menuService:MenuService, private router:Router,
    private restaurantService:RestaurantService) { }
  id=Math.floor((Math.random() * 1000) + 100);
  menuData={
    "_id":this.id,
    "res_id": 0,
    "name": "",
    "descr": "",
    "price": 0,
    "image":"",
    "rating":0
  }
  resData=[]
  ngOnInit(){
    this.restaurantService.getrestaurant().subscribe(
      {
        next:res=>{

          this.resData=res;
          console.log(res);
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  addRestaurnt(menuData){
    console.log(menuData);
    this.menuService.addMenu(menuData).subscribe(
      {
        next:res=>{
          window.location.reload();
        },
        error:err=>{
          console.log("err:",err);
        }
      }
    )
  }
}
