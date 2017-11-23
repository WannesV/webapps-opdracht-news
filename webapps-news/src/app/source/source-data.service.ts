import { Injectable } from '@angular/core';
import { Source } from './source.model';

@Injectable()
export class SourceDataService {
  private _sources = new Array<Source>();

  constructor() { 
    let source1 = new Source("techcrunch", "Techcrunch", "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.",
    "https://techcrunch.com", "technology", "en", "us");
    this._sources.push(source1);
  }

  get sources() : Source[] {
    return this._sources;
  }

  addNewSource(source) {
    this._sources.push(source);
  }
}
