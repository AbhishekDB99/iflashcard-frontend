import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  isFlipped: any = true;
  color: any;
  questionArray: any[] = [
    { que: 'Why?', ans: 'no idea' },
    { que: 'Then?', ans: 'lets see' },
    { que: 'Okay?', ans: 'yup' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.color = 'blue';
  }
  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
