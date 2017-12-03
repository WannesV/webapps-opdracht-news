import { AuthenticationService } from '../../user/authentication.service';
import { ArticleDataService } from '../article-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ ArticleDataService]
})
export class ArticleComponent implements OnInit {
  @Input() public article: Article;
  public user: string;


  constructor(private _articleDataService: ArticleDataService, private auth: AuthenticationService) { 
    this.user = auth.user$['_value'];
  }

  ngOnInit() {
  }

}
