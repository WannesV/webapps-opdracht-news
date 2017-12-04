import { AuthenticationService } from '../../user/authentication.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Source } from '../source.model';
import { SourceDataService } from '../source-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css'],
  providers: [ SourceDataService ]
})
export class SourceListComponent implements OnInit {
  private _sources: Source[];
  private _filteredSources: Source[];
  private _categories: string[];
  private _countries: string[];
  private _languages: string[];
  private _types: string[];
  public searchForm: FormGroup;
  private categorySelect: FormGroup;
  private countrySelect: FormGroup;
  private languageSelect: FormGroup;
  private typeSelect: FormGroup;
  public user: string;

  constructor(private _sourceDataService: SourceDataService, private fb: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.user$['_value'];
    this._sourceDataService.sources
      .subscribe(items =>  {
        this._sources = items;
        this._filteredSources = this._sources;
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
    
    this._types = ["Both", "Only Subscribed", "Only Non Subscribed"];
    
    this.searchForm = this.fb.group({
      searchText: this.fb.control(''),
      categorySelect: this.fb.control(''),
      countrySelect: this.fb.control(''),
      languageSelect: this.fb.control(''),
      typeSelect: this.fb.control('')
    });
  }

  onChange() {
    let s= this.searchForm.value.searchText.toLowerCase();
    let cat = this.searchForm.value.categorySelect;
    let c = this.searchForm.value.countrySelect;
    let l = this.searchForm.value.languageSelect;
    this._filteredSources = this._sources;

    if(!(s.trim() === '')) {
      this._filteredSources = this._filteredSources.filter(source => source.name.toLowerCase().indexOf(s) >= 0);
    } 
    if(!(cat === '' || cat === 'all categories')) {
      this._filteredSources = this._filteredSources.filter(s => s.category === cat);
    }
    if(!(c === '' || c === 'all countries')) {
      this._filteredSources = this._filteredSources.filter(s => s.country === c);
    }
    if(!(l === '' || l === 'all languages')) {
      this._filteredSources = this._filteredSources.filter(s => s.language === l);
    }
    switch(this.searchForm.value.typeSelect) {
      case 'Both':
        break;
      case 'Only Subscribed':
        this._filteredSources = this._filteredSources.filter(s => s.users.includes(this.user));
        break;
      case 'Only Non Subscribed':
      this._filteredSources = this._filteredSources.filter(s => !s.users.includes(this.user));
        break;
    }
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

  get types() {
    return this._types;
  }
}
