import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userCollection: AngularFirestoreCollection<User>;




  constructor(private _afs: AngularFirestore ) {
    this.userCollection = this._afs.collection<User>('users');
  }

  createUser(userData:User, idUser?:string) {

    return new Promise(async(resolve, reject)=>{

      try {
        const id = idUser ||  this._afs.createId();
        const data = {id,...userData};
        const result = this.userCollection.doc(id).set(data);

        resolve(result);

      } catch (error) {
        reject(error.message);
      }
    });
  }
}
