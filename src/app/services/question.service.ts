import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Question } from "../interfaces/question";


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionCollection: AngularFirestoreCollection<Question>;

  constructor(private _afs: AngularFirestore ) {
    this.questionCollection = this._afs.collection<Question>('questions');
  }

  createQuestion(question:Question) {

    return new Promise(async(resolve,reject)=>{

      try {
        const id = this._afs.createId();
        const data = {id, ...question};
        const result = await this.questionCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  getQuestions(idCategory:string) {
    return this._afs.collection<Question>('questions',ref=> ref.where('idCategory','==',idCategory)).snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Question))
    );
  }
}
