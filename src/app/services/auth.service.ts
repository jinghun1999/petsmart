import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';
import {LogService} from './log.service';
import {environment} from '../../environments/environment';
import {LoginParams} from '../_models/loginParams';
import {UserToken} from '../_models/user-token';

@Injectable()
export class AuthService {
  public loginParams: LoginParams;
  public currentUser: UserToken;
  public token: string;

  constructor(
    private http: HttpClient,
    private logService: LogService,
  ) {
    this.setUser(true);
  }

  setUser(isLogin: boolean): void {
    if (isLogin) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (this.currentUser) {
        this.token = `${this.currentUser.token_type} ${this.currentUser.access_token}`;
      }
    } else {
      this.currentUser = null;
      this.token = null;
    }
  }
  login(username: string, password: string): Observable<UserToken> {
    const params = 'name=' + username + '&pwd=' + password;
    this.loginParams = {
      userName: username,
      password: password,
    };
    // const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    // const options = {headers: headers};
    return this.http.get<UserToken>(environment.baseUrl + '/account/login?' + params).pipe(
      tap((user: UserToken) => {
        if (user) {
          this.token = `${user.token_type} ${user.access_token}`;
          localStorage.setItem('jwt', this.token);
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('loginParams', JSON.stringify(this.loginParams));
        }
      }),
      catchError(this.logService.handleError<UserToken>('login'))
    );
  }

  refreshToken(): Observable<string> {
    /*
        The call that goes in here will use the existing refresh token to call
        a method on the oAuth server (usually called refreshToken) to get a new
        authorization token for the API calls.
    */
    this.loginParams = JSON.parse(localStorage.getItem('loginParams'));
    if (!this.loginParams) {
      return of();
    }
    const tk = this.login(this.loginParams.userName, this.loginParams.password) as Observable<UserToken>;
    tk.subscribe((data) => {
      return of(`${data.token_type} ${data.access_token}`);
    });
    return of();
  }

  logout(): Observable<any> {
    return this.http.post<any>(environment.baseUrl + '/account/logout', {});
  }
}
