import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {UserToken} from '../_models/user-token';
import {AuthService} from '../services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [routerTransition()]
})
export class HomepageComponent implements OnInit {
  currentUser: UserToken = null;

  constructor(private router: Router,
              private authService: AuthService) {
    this.currentUser = this.authService.currentUser;
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(res => {
      sessionStorage.removeItem('jwt');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('loginParams');
      this.router.navigate(['/login']);
    });
  }
}
