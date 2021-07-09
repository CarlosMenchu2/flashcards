import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

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

  constructor(private _formBuilder:FormBuilder, public dialogRef: MatDialogRef<NewQuestionComponent>,
              private _questionService:QuestionService) { }

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
        idCategory:'',
      }

      this._questionService.createQuestion(this.questionInterface).then(()=>{
        console.log('Pregunta Creada');
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
