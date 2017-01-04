import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    private _baseurl = 'http://127.0.0.1:8000/categoryes/';

    constructor(private _http: Http) {}

    getCategoryes(): Observable<any[]> {
        return this._http.get(this._baseurl)
            .map((response: Response) => response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handelError);
    }
    getCategory(id: number): Observable<any> {
        return this.getCategoryes()
            .map((categoryes: any[]) => categoryes.find(c => c.id===id))
    }
    private handelError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}