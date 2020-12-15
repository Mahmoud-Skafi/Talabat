import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../guard/auth.service';
import { OrderService } from '../services/order.service';
import { AddOrderComponent } from './add-order/add-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';

@Component({
  selector: 'app-orders-manager',
  templateUrl: './orders-manager.component.html',
  styleUrls: ['./orders-manager.component.scss']
})
export class OrdersManagerComponent implements OnInit {
  // {
  //   "_id": 5,
  //   "res_id": 2,
  //   "menu_id": 7,
  //   "customer_id": 1,
  //   "quantity": 2,
  //   "address": "Univeristy Street",
  //   "phone": "444555555",
  //   "order_date": "2020-12-09T21:50:08.000Z"
  //   }

displayedColumns: string[] = ['id', 'restaurnts_id', 'menu_id','customer_id', 'quantity','order_date' ,'actions'];
 orderData=[];
  constructor(private orderService:OrderService,public authService:AuthService,public dialog: MatDialog) { }

  ngOnInit() {
    this.orderService.getOrder().subscribe(
      {
        next:res=>{

          this.orderData=res;
          console.log(res);
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  viewOrder(element) {
    const dialogRef = this.dialog.open(ViewOrderComponent,{
      width:'100%',
      data:{
        dataKey:element,
      }
    });
  }
  editOrder(element) {
    const dialogRef = this.dialog.open(EditOrderComponent,{
      width:'500px',
      data:{
        dataKey:element,
      }
    });
  }
  deleteOrder(element) {
    const dialogRef = this.dialog.open(DeleteOrderComponent,{
      width:'500px',
      data:{
        dataKey:element,
      }
    });
  }
  addOrder() {
    const dialogRef = this.dialog.open(AddOrderComponent,{
      width:'500px',
    });
  }

}
