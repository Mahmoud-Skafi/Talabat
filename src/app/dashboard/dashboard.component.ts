import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guard/auth.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  restaurantData=[];

  constructor(private restaurantService:RestaurantService,public authService:AuthService) { }
  ngOnInit() {
    this.restaurantService.getrestaurant().subscribe(
      {
        next:res=>{
          console.log(res);
          this.restaurantData=res;
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }

}
