import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Source } from './source.model';
import { AuthenticationService } from '../user/authentication.service';

@Injectable()
export class SourceDataService {
  private _appUrl = 'http://localhost:4200/API';
  private _sources = new Array<Source>();

  constructor(private http: Http, private auth: AuthenticationService) { 

  }

  get sources() : Observable<Source[]> {
    return this.http.get(`${this._appUrl}/sources`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(response => response.json().map(item => Source.fromJSON(item)));
  }

  getSource(id): Observable<Source> {
    return this.http.get(`${this._appUrl}/source/${id}`)
      .map(response => response.json()).map(item => Source.fromJSON(item));
  }

  addNewSource(source): Observable<Source> {
    return this.http.post(this._appUrl, source)
      .map(source => source.json()).map(item => Source.fromJSON(item));
  }
}
