import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  editorStyle = { 'height': '300px' }

  constructor() { }

  ngOnInit(): void {
  }

}
