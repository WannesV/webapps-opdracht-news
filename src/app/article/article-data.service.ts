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

  filteredArticles(q: string, cat: string, l: string, c: string) : Observable<Article[]> {
    let params = "";
    if(!(q.trim() === ''))
      params += "q=" + q + "&"
    if(!(cat.trim() === '' || cat === 'all categories'))
      params += "category=" + cat + "&"
    if(!(l.trim() === '' || l === 'all languages'))
      params += "language=" + l + "&"
    if(!(c.trim() === '' || c === 'all countries'))
      params += "country=" + c + "&"
    return this.http.get(`${this._apiUrl}/top-headlines?${params}apiKey=8c099fc468e74a98acce336d524406d6`)
    .map(response => response.json()['articles'].map(item => Article.fromJSON(item)));
  }
}
