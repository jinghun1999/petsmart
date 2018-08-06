import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {routerTransition} from '../router.animations';
import {AuthService} from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    // reset login status
    this.authService.logout().subscribe(res => {
    });

    // get return url from route parameters or default to '/'
    // console.log('')
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/homepage';
    // this.returnUrl = '/dashboard/home';
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password).subscribe(data => {
      if (data) {
        this.authService.setUser(true);
        // this.alertService.success('登录成功');
        this.router.navigate([this.returnUrl]);
      } else {
        // this.alertService.error('请重试');
        this.loading = false;
      }
    });
  }

}
