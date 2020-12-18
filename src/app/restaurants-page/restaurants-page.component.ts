import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../guard/auth.service';
import { MenuService } from '../services/menu.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.scss']
})
export class RestaurantsPageComponent implements OnInit {
  isLogin:boolean=false;
  constructor(public authService:AuthService,
    private restaurantService:RestaurantService,
    private menuService:MenuService,
    private router:Router) { }
  restaurantData=[];
  menuData:any;
  ngOnInit() {
    this.isLogin= this.authService.isLoggedIn();
    this.restaurantService.getrestaurant().subscribe(
      {
        next:res=>{

          this.restaurantData=res;
        },
        error:err=>{
          console.log(err);
        }
      }
    )

  }
  logout(){
    this.authService.logout();
    this.isLogin=false;
  }
  resid(data){
    this.router.navigate([`/ps/restaurants/${data._id}`])

  }
}
