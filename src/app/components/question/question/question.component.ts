import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { Router, ActivatedRoute } from "@angular/router";

import { NewQuestionComponent } from "../new-question/new-question.component";
import { AnswerToQuestionComponent } from "../answer-to-question/answer-to-question.component";
import { QuestionService } from "../../../services/question.service";
import { CategoryService } from "../../../services/category.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  editForm:FormGroup;
  idCategory: string;
  nameCategory:any = [];
  questions:any = [];
  question:any = [];

  constructor(private _dialog: MatDialog,private _activatedRoute: ActivatedRoute,
              private _categoryService:CategoryService, private _questionService:QuestionService) {

    this._activatedRoute.params.subscribe(params=>{
      console.log(params['idcategory']);
      this.idCategory = params['idcategory'];
      this.getCategories(this.idCategory);
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
    let dialogRerf:MatDialogRef<NewQuestionComponent> = this._dialog.open(NewQuestionComponent,dialogConfig);
    dialogRerf.componentInstance.idCategory=this.idCategory;
  }

  onCreateViewAnswer() {

    const dialogAnswer = new MatDialogConfig();

    let dialogRef:MatDialogRef<AnswerToQuestionComponent> = this._dialog.open(AnswerToQuestionComponent,dialogAnswer);
    dialogRef.componentInstance.answer = this.question.answer;

  }

  private getCategories(idCategory:string) {

    this._questionService.getQuestions(idCategory).subscribe(questions=>{
      this.questions=questions;
      console.log(this.questions);
    });
  }

  viewQuestion(question) {

    this.question=question;
  }
}
