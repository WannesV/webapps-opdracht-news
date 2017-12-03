import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Source } from '../source.model';
import { SourceDataService } from '../source-data.service';
import { map } from 'rxjs/operator/map';
import {startWith} from 'rxjs/operators/startWith';

@Component({
  selector: 'app-add-source',
  templateUrl: './add-source.component.html',
  styleUrls: ['./add-source.component.css'],
  providers: [ SourceDataService ]
})
export class AddSourceComponent implements OnInit {
  @Output() public newSource = new EventEmitter<Source>();
  sourceCtrl: FormControl;
  filteredSources: Observable<any[]>;

  sources: Source[];

  constructor(private fb: FormBuilder, private _sourceDataService: SourceDataService, private _router: Router) {
    this.sourceCtrl = new FormControl();
    console.log(this.sources);
    this.filteredSources = this.sourceCtrl.valueChanges
      .startWith('')
      .map(source => source ? this.filterSources(source) : this.sources.slice()
    );
  }

  ngOnInit() {
    this._sourceDataService.apiSources.subscribe(items => this.sources = items);
    console.log(this.sources);
  }
  
  onSubmit() {
    //this.newSource.emit(new Source(this.source.value.name, "", "", "", "", "", ""));
  }

  filterSources(name: string) {
    return this.sources.filter(source =>
      source.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
