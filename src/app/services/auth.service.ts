import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _firebaseAuth:AngularFireAuth) { }

  async singin(email:string,password:string){
    await this._firebaseAuth.signInWithEmailAndPassword(email,password).then(
      res=>{
        sessionStorage.setItem('user',JSON.stringify(res.user));
      }
    );
  }

  async singup(email:string, password:string) {
    await this._firebaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{
      sessionStorage.setItem('user',JSON.stringify(res.user));
    });
  }

  async logOut(){
    await this._firebaseAuth.signOut();
    sessionStorage.removeItem('user');
  }

  getCurrentUser() {
    this._firebaseAuth.authState.pipe(first()).toPromise();
  }
}
