import { Component, OnInit } from '@angular/core';
import {AuthService} from './services';
import {UserToken} from './_models/user-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentUser: UserToken;
  constructor(private authService: AuthService) {
    this.currentUser = authService.currentUser;
  }

  ngOnInit() {
  }
}
