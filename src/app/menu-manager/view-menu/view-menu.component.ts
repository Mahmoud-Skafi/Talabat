import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.scss']
})
export class ViewMenuComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  menuData=this.data.dataKey;
}
// "_id": 2,
// "res_id": 1,
// "name": "skafi_restaurnt",
// "descr": "description for the menu",
// "price": 15,
// "image": "../public/images/1.jpg",
// "rating": 5,
