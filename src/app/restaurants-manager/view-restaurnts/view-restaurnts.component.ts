import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { Inject } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-view-restaurnts',
  templateUrl: './view-restaurnts.component.html',
  styleUrls: ['./view-restaurnts.component.scss']
})
export class ViewRestaurntsComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }
  // viewData=data.dataKey;
  ngOnInit() {

  }
  resData=this.data.dataKey;
}
