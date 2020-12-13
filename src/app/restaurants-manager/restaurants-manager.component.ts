import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../guard/auth.service';
import { RestaurantService } from '../services/restaurant.service';
import {MatDialog} from '@angular/material/dialog';
import { Inject } from '@angular/core';

import {
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ViewRestaurntsComponent } from './view-restaurnts/view-restaurnts.component';
import { EditRestaurntsComponent } from './edit-restaurnts/edit-restaurnts.component';
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

          this.restaurantData=res;
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  viewResaurnt(element) {
    const dialogRef = this.dialog.open(ViewRestaurntsComponent,{
      width:'100%',
      data:{
        dataKey:element,
      }
    });
  }
  editResaurnt(element) {
    const dialogRef = this.dialog.open(EditRestaurntsComponent,{
      width:'500px',
      data:{
        dataKey:element,
      }
    });
  }

  displayedColumns: string[] = ['id', 'name', 'city', 'rating','actions'];

}
