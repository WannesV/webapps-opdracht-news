import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Source } from './source/source.model';
import { SourceDataService } from './source/source-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SourceDataService]
})
export class AppComponent {
  title = 'app';
  private _sources: Source[];

  constructor(private _sourceDataService : SourceDataService) {
    this._sources = this._sourceDataService.sources;    
  }

  newSourceAdded(source) {
    this._sourceDataService.addNewSource(source);
  }
  
}
