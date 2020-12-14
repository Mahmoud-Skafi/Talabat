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

displayedColumns: string[] = ['id', 'restaurnts_id', 'name', 'rating','price' ,'actions'];
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
