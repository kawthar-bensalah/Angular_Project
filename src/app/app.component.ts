import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  currentExample = 0;

  setExample(value: number) {
    this.currentExample = value;
  }

}
