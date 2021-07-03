import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';

import { CategoryService } from "../../../services/category.service";
import { Category } from "../../../interfaces/category";
import { AuthService } from "../../../services/auth.service";

import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categoryData:Category;
  public files: NgxFileDropEntry[] = [];

  constructor(public dialogRef: MatDialogRef<NewcategoryComponent>,private _formBuilder:FormBuilder, private _categoryService: CategoryService,
              private _snackBar: MatSnackBar, private _authService:AuthService) { }

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
        category:category,
        idUser:JSON.parse(this._authService.getUser())['uid']
      }
      this._categoryService.createCategory(this.categoryData).then(()=>{
        this.dialogRef.close();
        this._snackBar.open("Categoria Creada","X",{
          duration:2000,
          horizontalPosition:"right",
          verticalPosition:"top"
        })
      });
    } else {

      this.categoryForm.markAllAsTouched();

    }
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

}
