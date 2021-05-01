import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _firebaseAuth:AngularFireAuth) { }

  singin(email:string,password:string){
    return this._firebaseAuth.signInWithEmailAndPassword(email,password);
  }

  singup(email:string, password:string) {
    return this._firebaseAuth.createUserWithEmailAndPassword(email,password);
  }

  async logOut(){
    await this._firebaseAuth.signOut();
    sessionStorage.removeItem('user');
  }

  getCurrentUser() {
    return this._firebaseAuth.authState.pipe(first()).toPromise();
  }

  setUser(user) {

    sessionStorage.setItem('user',JSON.stringify(user));
  }

  getUser(){
    return sessionStorage.getItem('user');
  }
}
