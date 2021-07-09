import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FileService } from "../../../services/file.service";

@Component({
  selector: 'app-cardcategory',
  templateUrl: './cardcategory.component.html',
  styleUrls: ['./cardcategory.component.css']
})
export class CardcategoryComponent implements OnInit {

  @Input() infoCard:any = [];

  constructor(private _fileService:FileService, private _router:Router) { }


  ngOnInit(): void {
  }

  getImageURL(){


  }

  viewQuestions(idCategory) {
    this._router.navigate(['main/questions',idCategory]);
  }

}
