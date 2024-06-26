import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-events',
  templateUrl: './angular-events.component.html',
  styleUrls: ['./angular-events.component.css'],
})
export class AngularEventsComponent implements OnInit {
  textInput: any;
  textBoxInput: string = '';

  constructor() {}

  ngOnInit(): void {}

  getInput(input: any) {
    this.textInput = input;
  }

  getInputBoxValue(val: string) {
    this.textBoxInput = val;
  }
}
