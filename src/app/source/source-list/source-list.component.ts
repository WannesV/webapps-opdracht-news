import { Component, OnInit } from '@angular/core';
import { Source } from '../source.model';
import { SourceDataService } from '../source-data.service';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css'],
  providers: [ SourceDataService ]
})
export class SourceListComponent implements OnInit {
private _sources: Source[];

  constructor(private _sourceDataService: SourceDataService) { }

  ngOnInit() {
    this._sourceDataService.sources
      .subscribe(items => this._sources = items);
  }

  get sources() {
    return this._sources;
  }

}
