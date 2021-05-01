import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';

import { CategoryService } from "../../../services/category.service";
import { Category } from "../../../interfaces/category";

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categoryData:Category;

  constructor(public dialogRef: MatDialogRef<NewcategoryComponent>,private _formBuilder:FormBuilder, private _categoryService: CategoryService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createFormCategory();
  }

  createFormCategory() {

    this.categoryForm = this._formBuilder.group({
      category: ['',[Validators.required]]
    });
  }

  createCategory() {

    if(this.categoryForm.valid) {

      const { category } = this.categoryForm.value;

      this.categoryData = {
        category:category
      }
      this._categoryService.createCategory(this.categoryData).then(()=>{
        this.dialogRef.close();
        this._snackBar.open("Categoria Creada","X",{
          duration:2000,
          horizontalPosition:"right",
          verticalPosition:"top"
        })
      });
    }
  }

}
