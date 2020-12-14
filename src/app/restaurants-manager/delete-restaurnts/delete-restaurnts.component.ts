import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-delete-restaurnts',
  templateUrl: './delete-restaurnts.component.html',
  styleUrls: ['./delete-restaurnts.component.scss']
})
export class DeleteRestaurntsComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private restaurantService:RestaurantService,
  private router:Router) { }

  ngOnInit(): void {
  }
  resData=this.data.dataKey;

  deleteRestaurnt(resData){
    this.restaurantService.deleteRestaurant(resData).subscribe(
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
