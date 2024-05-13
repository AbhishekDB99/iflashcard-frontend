import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {
  data:any

  constructor() { }

  ngOnInit(): void {

  }
  getData(formData:NgForm){
      this.data = formData
  }
}
