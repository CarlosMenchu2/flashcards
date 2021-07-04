import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { RegisterComponent } from "../register/register.component";
import { AuthService } from "../../services/auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  singinForm: FormGroup;

  constructor(private _formBuilder:FormBuilder,private _dialog: MatDialog, private _authService:AuthService,
              private snackBar: MatSnackBar, private _router:Router) { }

  ngOnInit(): void {
    this.createFormSining();
  }

  openRegister(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="500px";
    dialogConfig.minWidth="150px";

    this._dialog.open(RegisterComponent,dialogConfig);
  }

  createFormSining (){
    this.singinForm = this._formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  login() {
    if(this.singinForm.valid){

      const { email,password } = this.singinForm.value;

      this._authService.singin(email,password).then(res=>{
        this._authService.setUser(res.user);
        this._router.navigate(['main']);
      }).catch(()=>{
        console.log('Usuario o Contraseña Incorrectos');
      });
    }
  }
}
