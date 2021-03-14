import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { Validator } from "./validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hide1 = true;
  hide2 = true;

  constructor( public dialogRef: MatDialogRef<RegisterComponent>, private _formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  closeDialog(){
    this.dialogRef.close();
  }

  private createRegisterForm(){
    this.registerForm = this._formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]],
    },
    {
      validators:Validator.passwordMatchValidator
    });
  }
}
