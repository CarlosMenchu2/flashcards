import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { Validator } from "./validator";
import { AuthService } from "../../services/auth.service";
import { User } from 'src/app/interfaces/user';
import { QuestionService } from 'src/app/services/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hide1 = true;
  hide2 = true;
  userData: User;

  constructor( public dialogRef: MatDialogRef<RegisterComponent>, private _formBuilder:FormBuilder,
               private _authService: AuthService, private _registerService: QuestionService, private snackBar: MatSnackBar) { }

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

  register(){
    if(this.registerForm.valid){

      const {name,email,password,_} = this.registerForm.value;

      this.userData = {
        name:name,
        email:email,
        password:password
      }

      this._authService.singup(email,password).then(()=>{
        this._registerService.createUser(this.userData).then(()=>{
          this.dialogRef.close();
          this.snackBar.open("Registro exitoso","X",{
            duration:2000,
            horizontalPosition:"right",
            verticalPosition:"top"
          });
        });
      });
    }
  }
}
