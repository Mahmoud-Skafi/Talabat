import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-delete-menu',
  templateUrl: './delete-menu.component.html',
  styleUrls: ['./delete-menu.component.scss']
})
export class DeleteMenuComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private menuService:MenuService,
  private router:Router) { }

  ngOnInit(): void {
  }
  menuData=this.data.dataKey;

  deleteMenu(menuData){
    this.menuService.deleteMenu(menuData).subscribe(
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
