import { Injectable } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  URLImage:Observable<string>;

  constructor(private _af:AngularFireStorage) { }

  updateImage(url,imageFile){
    return this._af.upload(url,imageFile);
  }

  getImage(url){

   return this.URLImage = this._af.ref(url).getDownloadURL();
  }
}
