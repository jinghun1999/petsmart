import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {UserToken} from '../_models/user-token';
import {AuthenticationService} from '../_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [routerTransition()]
})
export class HomepageComponent implements OnInit {
  currentUser: UserToken;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    debugger
    alert('lll')
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
