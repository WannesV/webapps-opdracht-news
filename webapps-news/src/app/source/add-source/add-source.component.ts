import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Source } from '../source.model';
import { SourceDataService } from '../source-data.service';

@Component({
  selector: 'app-add-source',
  templateUrl: './add-source.component.html',
  styleUrls: ['./add-source.component.css']
})
export class AddSourceComponent implements OnInit {
  @Output() public newSource = new EventEmitter<Source>();
  private source: FormGroup;

  constructor(private fb: FormBuilder, private _sourceDataService: SourceDataService, private _router: Router) {}

  ngOnInit() {
    this.source = this.fb.group({
      name: this.fb.control('Techcrunch', [Validators.required])
    })
  }
  
  onSubmit() {
    this.newSource.emit(new Source(this.source.value.name, "", "", "", "", "", ""));
  }


}
