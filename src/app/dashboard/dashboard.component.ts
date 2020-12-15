import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guard/auth.service';
import { CustomerService } from '../services/customer.service';
import { MenuService } from '../services/menu.service';
import { OrderService } from '../services/order.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  restaurantData=[];
  orderData=[];
  customerData=[];
  menuData=[];

  constructor(private restaurantService:RestaurantService,
    private customerService:CustomerService,
    private menuService:MenuService,
    private orderService:OrderService,
    public authService:AuthService) { }

  ngOnInit() {
    this.getRestaurns();
    this.getOrders();
    this.getMenu();
    this.getCustomer();
  }
  getRestaurns(){
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
  getOrders(){
    this.orderService.getOrder().subscribe(
      {
        next:res=>{
          this.orderData=res;
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  getMenu(){
    this.menuService.getMenus().subscribe(
      {
        next:res=>{
          this.menuData=res;
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  getCustomer(){
    this.customerService.getCustomer().subscribe(
      {
        next:res=>{
          this.customerData=res;
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
}
