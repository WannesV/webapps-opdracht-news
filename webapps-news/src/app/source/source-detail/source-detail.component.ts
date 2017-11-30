import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Source } from '../source.model';
import { SourceDataService } from '../source-data.service';

@Component({
  selector: 'app-source-detail',
  templateUrl: './source-detail.component.html',
  styleUrls: ['./source-detail.component.css']
})
export class SourceDetailComponent implements OnInit {
  private _source: Source;

  constructor(private route: ActivatedRoute,
    private sourceDataService: SourceDataService) { 
    
  }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this._source = item['source']);
  }

}
