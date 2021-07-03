import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { NewcategoryComponent } from "../newcategory/newcategory.component";

import { CategoryService } from "../../../services/category.service";
import { Category } from 'src/app/interfaces/category';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  carlos:any = [1,2,3,4,5,6,7,8,9,10];
  categories: Category[];


  constructor(private _dialog: MatDialog, private _categoryService:CategoryService, private _authService: AuthService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onCreateDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="500px";
    dialogConfig.minWidth="150px";
    this._dialog.open(NewcategoryComponent,dialogConfig);
  }

  getCategories() {
    this._categoryService.getAllCategories(JSON.parse(this._authService.getUser())['uid']).subscribe(res=>{
      this.categories = res;
      console.log(res);
    });
  }

}
