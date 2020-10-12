import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang2';
  callFromChild = function(str) {
    alert(str);
  };
  callFromChild2 = function(str) {
    alert(str);
  }
}
