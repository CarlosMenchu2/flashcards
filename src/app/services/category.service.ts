import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CategoriesComponent } from '../components/category/categories/categories.component';


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
        const result = await this.categoryCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  getAllCategories(idUser:string) {

    return this._afs.collection<Category>('categories',ref=> ref.where('idUser','==',idUser)).snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Category))
    );

  }

  getCategory(idCategory:string) {
    return this._afs.collection<Category>('categories',ref=>ref.where('id','==',idCategory)).snapshotChanges().pipe(
      map(actions => actions.map(c => c.payload.doc.data() as Category ))
    );
  }
}
