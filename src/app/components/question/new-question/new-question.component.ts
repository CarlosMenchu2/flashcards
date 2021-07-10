import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';


import { QuestionService } from "../../../services/question.service"
import { Question } from "../../../interfaces/question";

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  questionForm: FormGroup;
  questionInterface:Question;
  idCategory:string = "Hola";

  constructor(private _formBuilder:FormBuilder, public dialogRef: MatDialogRef<NewQuestionComponent>,
              private _questionService:QuestionService, private _activatedRoute: ActivatedRoute,
              private _snackBar: MatSnackBar) {

    this._activatedRoute.params.subscribe(params=>{
      console.log(params['idcategory']);
      this.idCategory = params['idcategory'];
    });
  }

  ngOnInit(): void {
    this.createQestionForm();
  }

  createQestionForm() {
    this.questionForm = this._formBuilder.group({
      question:['',[Validators.required]],
      answer: ['',[Validators.required]]
    });
  }

  saveQuestion(){
    console.log(this.questionForm.get('answer').value);

    if(this.questionForm.valid){

      const {question, answer} = this.questionForm.value;

      this.questionInterface = {
        question:question,
        answer:answer,
        idCategory:this.idCategory,
      }

      this._questionService.createQuestion(this.questionInterface).then(()=>{
        this.dialogRef.close();
        this._snackBar.open("Pregunta Creada","X",{
          duration:2000,
          horizontalPosition:"right",
          verticalPosition:"top"
        });
      },
      (error)=>{
        console.log(error);
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
