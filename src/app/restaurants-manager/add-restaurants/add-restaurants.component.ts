import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.scss']
})
export class AddRestaurantsComponent implements OnInit {
  id=Math.floor((Math.random() * 1000) + 100);
  resData={
    "_id": this.id,
    "name": "",
    "city": "",
    "desc":'',
    "street": "",
    "lat": "",
    "long": "",
    "phone": "",
    "image":"",
    "rating":Number
  }
  constructor(
  private restaurantService:RestaurantService,
  private router:Router) { }

  ngOnInit(): void {
  }
  addRestaurnt(resData){
    this.restaurantService.addRestaurant(resData).subscribe(
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

