import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  questionForm: FormGroup;

  constructor(private _formBuilder:FormBuilder) { }

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
  }

}
