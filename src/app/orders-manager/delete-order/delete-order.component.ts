import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.scss']
})
export class DeleteOrderComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private orderService:OrderService,
  private router:Router,
  private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }
  orderData=this.data.dataKey;
  deleteMenu(orderData){
    this.orderService.deleteOrder(orderData).subscribe(
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
