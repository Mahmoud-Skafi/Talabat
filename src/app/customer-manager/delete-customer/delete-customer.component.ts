import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private customerService:CustomerService,
  private router:Router) { }

  ngOnInit(): void {
  }
  CustomerData=this.data.dataKey;

  deleteCustomer(data){
    this.customerService.deleteCustomer(data).subscribe(
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
