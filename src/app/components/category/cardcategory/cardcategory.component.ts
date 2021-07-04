import { Component, Input, OnInit } from '@angular/core';

import { FileService } from "../../../services/file.service";

@Component({
  selector: 'app-cardcategory',
  templateUrl: './cardcategory.component.html',
  styleUrls: ['./cardcategory.component.css']
})
export class CardcategoryComponent implements OnInit {

  @Input() infoCard:any = [];

  constructor(private _fileService:FileService) { }


  ngOnInit(): void {
  }

  getImageURL(){


  }

}
