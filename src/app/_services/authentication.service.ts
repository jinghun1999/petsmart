import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserToken} from '../_models/user-token';

@Injectable()
export class AuthenticationService {

  public token: string;

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<UserToken> {
    const params = 'name=' + username + '&pwd=' + password;

    // const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    // const options = {headers: headers};
    return this.http.get<UserToken>(environment.baseUrl + '/account/login?' + params).pipe(
      tap((response: UserToken) => {
        const user = response;
        this.token = user.access_token;
        if (user && this.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }),
      catchError(this.handleError<UserToken>('login'))
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error.error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }
}
