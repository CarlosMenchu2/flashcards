import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private userCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore ) {
    this.userCollection = this.afs.collection<User>('users');
  }

  createUser(userData:User, idUser?:string) {

    return new Promise(async(resolve, reject)=>{

      try {
        const id = idUser ||  this.afs.createId();
        const data = {id,...userData};
        const result = this.userCollection.doc(id).set(data);

        resolve(result);

      } catch (error) {
        reject(error.message);
      }
    });
  }
}
