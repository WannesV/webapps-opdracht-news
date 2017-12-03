import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Article } from './article.model'
import { Http, Response, Headers } from '@angular/http'
import { AuthenticationService } from '../user/authentication.service';

@Injectable()
export class ArticleDataService {
  private _appUrl = '/API';
  private _apiUrl = 'https://newsapi.org/v2';
  private _articles = new Array<Article>();

  constructor(private http: Http, private auth: AuthenticationService) { }

  articles(sources: string) : Observable<Article[]> {

    return this.http.get(`${this._apiUrl}/top-headlines?sources=${sources}&apiKey=8c099fc468e74a98acce336d524406d6`)
      .map(response => response.json()['articles'].map(item => Article.fromJSON(item)));

  }
}
