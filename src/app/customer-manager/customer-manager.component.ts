import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../guard/auth.service';
import { CustomerService } from '../services/customer.service';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
// import { ViewCustomerComponent } from './view-customer/view-customer.component';


@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styleUrls: ['./customer-manager.component.scss']
})
export class CustomerManagerComponent implements OnInit {

  displayedColumns: string[] = ['id',  'first_name','last_name', 'phone' ,'actions'];
  customerData=[];
   constructor(private customerService:CustomerService,public authService:AuthService,public dialog: MatDialog) { }

   ngOnInit() {
     this.customerService.getCustomer().subscribe(
       {
         next:res=>{

           this.customerData=res;
           console.log(res);
         },
         error:err=>{
           console.log(err);
         }
       }
     )
   }

   deleteCustomer(element) {
     const dialogRef = this.dialog.open(DeleteCustomerComponent,{
       width:'500px',
       data:{
         dataKey:element,
       }
     });
   }

}
