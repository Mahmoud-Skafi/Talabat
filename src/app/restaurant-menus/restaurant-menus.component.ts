import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../guard/auth.service';
import { MenuService } from '../services/menu.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-menus',
  templateUrl: './restaurant-menus.component.html',
  styleUrls: ['./restaurant-menus.component.scss']
})
export class RestaurantMenusComponent implements OnInit {
  isLogin: boolean = false;
  resData:any ;
  resId: any;
  menuData:any;
  private routeSub: Subscription;
  constructor(public restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private authService:AuthService,
    private menuService:MenuService) { }
  ngOnInit() {
      this.isLogin= this.authService.isLoggedIn();
    this.routeSub = this.route.params.subscribe(params => {
      this.resId=params['id'];
    });
    console.log(this.resId);

    this.getRes();
    this.getResMenus();

  }
  getRes() {
    this.restaurantService.getRestauranById(this.resId).subscribe(
      {
        next: res => {

          this.resData = res;

        },
        error: err => {
          console.log(err);
        }
      }
    )
  }
  getResMenus(){
    this.menuService.getMenuById(this.resId).subscribe(
      {
        next: res => {
          this.menuData = res;
          console.log(this.menuData)
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  logout() {
    this.authService.logout();
    this.isLogin=false;
  }
}
