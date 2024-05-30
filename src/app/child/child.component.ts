import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() parentData: any;
  @Input() parentArray: any;
  @Output() childComponentEvent = new EventEmitter();
  @Output() getEventFromChildComponentWithoutFunc = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log(this.parentData);
  }

  emitFunction(inputValue: any) {
    this.getEventFromChildComponentWithoutFunc.emit(inputValue);
  }
}
