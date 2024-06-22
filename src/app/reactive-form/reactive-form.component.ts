import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  loginForm = new FormGroup({
    user: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {}
  loginFormSubmit() {
    console.log(this.loginForm.value);
  }
}
