import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-edit-restaurnts',
  templateUrl: './edit-restaurnts.component.html',
  styleUrls: ['./edit-restaurnts.component.scss']
})
export class EditRestaurntsComponent implements OnInit {
  id=this.data.dataKey._id;
  resData={
    "_id":this.id,
    "name": "",
    "city": "hebron",
    "desc":`Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
      Workers and server-side rendering. Angular puts you in control over scalability. Meet huge
      data requirements by building data models on RxJS, Immutable.js or another push-model.`,
    "street": "tafooh",
    "lat": "122°05'06.24 ",
    "long": "37°25'19.07",
    "phone": "059902829",
    "image":"../public/images/1.jpg",
    "rating":9
  }

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private restaurantService:RestaurantService,
  private router:Router) { }


  ngOnInit(): void {
  }
  refresh(): void {
    window.location.reload();
}
  // id=data.dataKey._id;
  editRestaurnt(resData){
    console.log(resData);
    this.restaurantService.updateRestaurant(resData).subscribe(
      {
        next:res=>{
          console.log(res);
          window.location.reload();
        },
        error:err=>{
          console.log("err:",err);
        }
      }
    )
  }
}
