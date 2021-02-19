import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { CardState } from "./question-card-interface";

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('500ms')
      ]),
      transition('flipped => default', [
        animate('500ms')
      ])
    ])
  ]
})
export class QuestionCardComponent implements OnInit {

  data: CardState = {
    state: "default"
  };

  constructor() { }

  ngOnInit(): void {
  }

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}
