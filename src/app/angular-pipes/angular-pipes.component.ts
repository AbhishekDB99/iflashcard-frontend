import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css'],
})
export class AngularPipesComponent implements OnInit {
  upperCaseText: string = 'uppercase testing';
  lowerCaseText: string = 'lowercase testing';
  today = Date();
  jsonObject = [
    {
      name: 'something',
      age: 20,
    },
    {
      name: 'somebody',
      age: 30,
    },
    {
      name: 'someone',
      age: 25,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
