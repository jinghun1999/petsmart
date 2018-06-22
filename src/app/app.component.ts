import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  animations: [trigger(
    'openClose',
    [
      state('collapsed, void', style({height: '0px', color: 'maroon', borderColor: 'maroon'})),
      state('expanded', style({height: '*', borderColor: 'green', color: 'green'})),
      transition(
        'collapsed <=> expanded', [animate(500, style({height: '250px'})), animate(500)])
    ])],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stateExpression: string;
  constructor() { this.collapse(); }
  expand() { this.stateExpression = 'expanded'; }
  collapse() { this.stateExpression = 'collapsed'; }
}
