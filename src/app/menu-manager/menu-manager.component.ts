import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guard/auth.service';

import {MatDialog} from '@angular/material/dialog';
import { Inject } from '@angular/core';

import {
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MenuService } from '../services/menu.service';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { DeleteMenuComponent } from './delete-menu/delete-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
@Component({
  selector: 'app-menu-manager',
  templateUrl: './menu-manager.component.html',
  styleUrls: ['./menu-manager.component.scss']
})
export class MenuManagerComponent implements OnInit {
  menuData=[];
  constructor(private menuService:MenuService,public authService:AuthService,public dialog: MatDialog) { }

  ngOnInit() {
    this.menuService.getMenus().subscribe(
      {
        next:res=>{

          this.menuData=res;
          console.log(res);
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  viewMenu(element) {
    const dialogRef = this.dialog.open(ViewMenuComponent,{
      width:'100%',
      data:{
        dataKey:element,
      }
    });
  }
  editMenu(element) {
    const dialogRef = this.dialog.open(EditMenuComponent,{
      width:'500px',
      data:{
        dataKey:element,
      }
    });
  }
  deleteMenu(element) {
    const dialogRef = this.dialog.open(DeleteMenuComponent,{
      width:'500px',
      data:{
        dataKey:element,
      }
    });
  }
  addMenu() {
    const dialogRef = this.dialog.open(AddMenuComponent,{
      width:'500px',
    });
  }
  displayedColumns: string[] = ['id', 'restaurnts_id', 'name', 'rating','price' ,'actions'];
}
