import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


import { Category } from "../interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryCollection: AngularFirestoreCollection<Category>;

  constructor(private _afs: AngularFirestore) {
    this.categoryCollection = this._afs.collection<Category>('categories');
  }

  createCategory(category:Category) {

    return new Promise(async(resolve,reject)=>{

      try {
        const id = this._afs.createId();
        const data = {id, ...category};
        const result = this.categoryCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
}
