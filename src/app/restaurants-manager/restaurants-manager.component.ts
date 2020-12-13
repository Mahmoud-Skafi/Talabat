import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../guard/auth.service';
import { RestaurantService } from '../services/restaurant.service';
import {MatDialog} from '@angular/material/dialog';
import { Inject } from '@angular/core';

import {
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
@Component({
  selector: 'app-restaurants-manager',
  templateUrl: './restaurants-manager.component.html',
  styleUrls: ['./restaurants-manager.component.scss']
})

export class RestaurantsManagerComponent implements OnInit {
  restaurantData=[];
  constructor(private restaurantService:RestaurantService,public authService:AuthService,public dialog: MatDialog) { }
  resId;
  ngOnInit() {
    this.restaurantService.getrestaurant().subscribe(
      {
        next:res=>{
          // console.log(res);
          this.restaurantData=res;
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  openDialog(element) {
    // console.log(element);
    const dialogRef = this.dialog.open(ViewRestaurants,{
      width:'500px',
      height:'500px',
      data:{
        dataKey:element,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  displayedColumns: string[] = ['id', 'name', 'city', 'rating','actions'];
  // dataSource = ELEMENT_DATA;
}
@Component({
  selector: 'view-restaurants',
  templateUrl: 'view-restaurants.html',
})
export class ViewRestaurants implements OnInit  {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }
  // viewData=data.dataKey;
  ngOnInit() {
    console.log(this.data.dataKey.name)
  }
}
