import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() callParentEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log('test');
  }

  clickButton(): void {
    this.callParentEvent.emit("Hello from component 2");
  }  

}
