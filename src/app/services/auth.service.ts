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
    await this._firebaseAuth.signOut().then(res=>{
      console.log(res);
    });
    sessionStorage.removeItem('user');
  }

  getCurrentUser() {
    this._firebaseAuth.authState.pipe(first()).toPromise();
  }

  getPromesa(x:number) {

    return new Promise((resolve,reject)=>{
      if (x==10){
        resolve('realizado');
      }else{
        reject('Malo');
      }
    });
  }
}
