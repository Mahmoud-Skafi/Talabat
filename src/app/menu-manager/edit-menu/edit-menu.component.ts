import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private menuService:MenuService, private router:Router,
    ) { }

  ngOnInit(): void {
  }
  menuData=this.data.dataKey;
  editMenu(menuData){
    this.menuService.updateMenu(menuData).subscribe(
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
