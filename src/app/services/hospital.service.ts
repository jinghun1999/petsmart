import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ResultModel} from '../_models';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  getHospitalPager(page: number): Observable<ResultModel> {
    return this.http.get<ResultModel>(environment.baseUrl + '/hospital/getHospitalPager?page=' + page);
  }
}
