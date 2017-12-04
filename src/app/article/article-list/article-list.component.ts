import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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
  private _filteredArticles: Article[];
  private _sources: Source[];
  private _allSources: Source[];
  public user: string;
  private _filteredSources: Source[];
  private _categories: string[];
  private _countries: string[];
  private _languages: string[];
  private searchForm: FormGroup;
  private categorySelect: FormGroup;
  private countrySelect: FormGroup;
  private languageSelect: FormGroup;

  constructor(private _articleDataService: ArticleDataService, private auth: AuthenticationService, private _sourceDataService: SourceDataService, private fb: FormBuilder) {
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

    this._sourceDataService.sources
    .subscribe(items =>  {
      this._allSources = items;
      this._filteredSources = this._allSources;
      this._categories = ['all categories'];
      this._sources.forEach(s => this._categories.push(s.category));
      this._categories = Array.from(new Set(this._categories));
      this._languages = ['all languages'];
      this._sources.forEach(s => this._languages.push(s.language));
      this._languages = Array.from(new Set(this._languages));
      this._countries = ['all countries'];
      this._sources.forEach(s => this._countries.push(s.country));
      this._countries = Array.from(new Set(this._countries));
    });
    
    this.searchForm = this.fb.group({
      searchText: this.fb.control(''),
      categorySelect: this.fb.control(''),
      countrySelect: this.fb.control(''),
      languageSelect: this.fb.control('')
    });
  }

  onChange() {
    let s= this.searchForm.value.searchText.toLowerCase();
    let cat = this.searchForm.value.categorySelect;
    let c = this.searchForm.value.countrySelect;
    let l = this.searchForm.value.languageSelect;
    this._filteredSources = this._sources;
    this._articleDataService.filteredArticles(s, cat, l, c)
    .subscribe(items => {
      this._filteredArticles = items;
    });
  }

  get articles() {
    return this._articles;
  }

  get filteredArticles() {
    return this._filteredArticles;
  }
  get sources() {
    return this._sources;
  }

  get filteredSources() {
    return this._filteredSources;
  }

  get categories() {
    return this._categories;
  }

  get countries() {
    return this._countries;
  }

  get languages() {
    return this._languages;
  }
}
