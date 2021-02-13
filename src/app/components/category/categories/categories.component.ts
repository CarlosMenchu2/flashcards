import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { NewcategoryComponent } from "../newcategory/newcategory.component";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  carlos:any = [1,2,3,4,5,6,7,8,9,10];

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreateDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="500px";
    dialogConfig.minWidth="150px";
    this._dialog.open(NewcategoryComponent,dialogConfig);
  }

}
