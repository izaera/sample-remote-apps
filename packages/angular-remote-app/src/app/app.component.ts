import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  get message(): string { return this._message; }
  
  set message(message: string) {
    this._message = message;
  }

  private _message = '';

}
