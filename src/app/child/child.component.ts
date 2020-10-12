import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() callParent;

  ngOnInit(): void {
  }

  clickButton(): void {
    this.callParent("Hi!");
  }

}
