import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Hospital, ResultModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) {
  }

  getHospitalPager(page: number): Observable<ResultModel> {
    return this.http.get<ResultModel>(environment.baseUrl + '/hospital/getHospitalPager?page=' + page);
  }

  saveHospital(hos: Hospital): Observable<ResultModel> {
    return this.http.post<ResultModel>(environment.baseUrl + '/hospital/postSave', hos);
  }

  delete(id: string): Observable<ResultModel> {
    return this.http.delete<ResultModel>(environment.baseUrl + '/hospital/delete?id=' + id);
  }
}
