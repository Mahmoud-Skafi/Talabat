import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  constructor(private restaurant:RestaurantService) { }

  ngOnInit() {
    // this.restaurant.getrestaurant().subscribe()
  }

}
