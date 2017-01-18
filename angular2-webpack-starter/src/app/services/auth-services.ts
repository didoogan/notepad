/**
 * Created by user on 18.01.17.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { IUser } from '../auth/user';

@Injectable()

export class LoginService {
  constructor(private http: Http){
  }

  makeLogin (user: IUser): Observable<IUser> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('http://localhost:8000/rest-auth/login/', {
      'username': user.login,
      'password': user.password
    }, options)
      .map((res: Response)=> res.json())
      .catch((error: Response) => Observable.throw(error.json() || 'Server error'));
  }
}
