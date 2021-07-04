import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';


import { CategoryService } from "../../../services/category.service";
import { Category } from "../../../interfaces/category";
import { AuthService } from "../../../services/auth.service";
import { FileService } from "../../../services/file.service";



@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categoryData:Category;
  imageURL:any;
  imageData:any;
  url:string;
  fileAttr = '';
  inProgress:boolean = true;

  constructor(public dialogRef: MatDialogRef<NewcategoryComponent>,private _formBuilder:FormBuilder, private _categoryService: CategoryService,
              private _snackBar: MatSnackBar, private _authService:AuthService, private _fileService:FileService) { }

  ngOnInit(): void {
    this.createFormCategory();
  }

  @ViewChild('fileInput') fileInput: ElementRef;


  createFormCategory() {

    this.categoryForm = this._formBuilder.group({
      category: ['',[Validators.required]],
      image: ['']
    });
  }

  createCategory() {

    if(this.categoryForm.valid) {


      this.url = 'images/'+Math.random()+new Date().getTime()+this.fileAttr;

      this._fileService.updateImage(this.url,this.imageData).then(()=>{
        this._fileService.getImage(this.url).subscribe(imageCompleteURL=>{
          this.armarFormulario(imageCompleteURL);
          this._categoryService.createCategory(this.categoryData).then(()=>{
            this.dialogRef.close();
            this._snackBar.open("Categoria Creada","X",{
              duration:2000,
              horizontalPosition:"right",
              verticalPosition:"top"
            });
          });
        });
      });
    } else {

      this.categoryForm.markAllAsTouched();

    }
  }

  uploadFileEvt(imgFile: any) {

    if (imgFile.target.files[0]) {
      this.imageData = imgFile.target.files[0];
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name;
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.readAsDataURL(imgFile.target.files[0]);
      reader.onload = (_event) => {
        this.imageURL = reader.result;
      }
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';

    }
  }

  private armarFormulario(url) {

    const { category } = this.categoryForm.value;
    // this.url = 'images/'+Math.random()+new Date().getTime()+this.fileAttr;
    this.categoryData = {
      category:category,
      imageURL: url,
      idUser:JSON.parse(this._authService.getUser())['uid']
    }
  }
}
