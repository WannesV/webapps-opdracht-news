import { SourceDataService } from '../../source/source-data.service';
import { Article } from '../article.model';
import { ArticleDataService } from '../article-data.service';
import { Component, OnInit } from '@angular/core';
import { Source } from '../../source/source.model'
import { AuthenticationService } from '../../user/authentication.service'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleDataService, SourceDataService]
})
export class ArticleListComponent implements OnInit {
  private _articles: Article[];
  private _sources: Source[];
  public user: string;

  constructor(private _articleDataService: ArticleDataService, private auth: AuthenticationService, private _sourceDataService: SourceDataService) {
   }

  ngOnInit() {
    this.user = this.auth.user$['_value'];
    let sourceList = "";
    this._sourceDataService.sources
    .subscribe(items => {
      this._sources = items;
      this._sources.forEach(s => {
        if(s.users.includes(this.user)) {
          sourceList += s.name.replace(' ', '-') + ',';
        }
      });
      this._articleDataService.articles(sourceList)
      .subscribe(items => this._articles = items);
    });
    
  }

  get articles() {
    return this._articles;
  }
}
