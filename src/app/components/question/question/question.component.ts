import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router, ActivatedRoute } from "@angular/router";

import { NewQuestionComponent } from "../new-question/new-question.component";
import { AnswerToQuestionComponent } from "../answer-to-question/answer-to-question.component";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  editForm:FormGroup;

  constructor(private _dialog: MatDialog,private _activatedRoute: ActivatedRoute,  private _router: Router) {
    this._activatedRoute.params.subscribe(params=>{
      console.log(params['idcategory']);

    });
   }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      'editor':new FormControl(null)
    })
    this.editForm.get('editor').setValue('<p>dsdsdsdsdsd</p><p><em>dsdsdssdsdsd</em></p>');
  }

  enviar() {
    console.log(this.editForm.get('editor').value);
  }

  onCreateDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose=true;
    // dialogConfig.width="500px";
    // dialogConfig.minWidth="150px";
    // dialogConfig.height="600px";
    this._dialog.open(NewQuestionComponent,dialogConfig);
  }

  onCreateViewAnswer() {

    const dialogAnswer = new MatDialogConfig();
    this._dialog.open(AnswerToQuestionComponent,dialogAnswer);

  }
}
