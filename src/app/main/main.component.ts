import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  data: any = 'Not yet from parent';
  childComponentData: any = '';
  childComponentData2: any = '';
  userDetails = [
    { name: 'user1', email: 'user1@test.com' },
    { name: 'user2', email: 'user2@test.com' },
    { name: 'user3', email: 'user3@test.com' },
    { name: 'user4', email: 'user4@test.com' },
    { name: 'user5', email: 'user5@test.com' },
  ];
  constructor() {}

  ngOnInit(): void {}
  generateValue() {
    this.data = Math.floor(Math.random() * 10);
  }

  getEventFromChildComponent(data: any) {
    this.childComponentData = data;
  }

  getEventFromChildComponentWithoutFunc(data: any) {
    this.childComponentData2 = data;
  }
}
