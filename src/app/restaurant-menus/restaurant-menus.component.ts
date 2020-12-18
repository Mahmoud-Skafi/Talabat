import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../guard/auth.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-menus',
  templateUrl: './restaurant-menus.component.html',
  styleUrls: ['./restaurant-menus.component.scss']
})
export class RestaurantMenusComponent implements OnInit {
  isLogin:boolean=false;
  // private routeSub: Subscription;
  resData=[];
  resId:any;
  constructor(private restaurantService:RestaurantService,) { }
    ngOnInit() {
    //   this.isLogin= this.authService.isLoggedIn();
    // this.routeSub = this.route.params.subscribe(params => {
    //   this.resId=params['id'];
    // });
    // console.log(this.resId)
    this.getRes();

  }
  getRes(){
    this.restaurantService.getrestaurant().subscribe(
      {
        next:res=>{
          this.resData=res;
        },
        error:err=>{
          console.log(err);
        }
      }
    )
    console.log(this.resData);
  }
  ngOnDestroy() {
    // this.routeSub.unsubscribe();
  }
  logout(){
    // this.authService.logout();
    // this.isLogin=false;
  }
}
