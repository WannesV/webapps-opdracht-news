import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../source.model';
import { SourceDataService } from '../source-data.service';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],
  providers: [ SourceDataService ]
})
export class SourceComponent implements OnInit {
  @Input() public source: Source;
  public user: string;

  constructor(private _sourceDataService: SourceDataService, private auth: AuthenticationService) {
    this.user = auth.user$['_value'];
    
   }

  ngOnInit() {
  }

  subscribe(source: Source) {
    //add user to source
    source.addUser(this.user);
    this._sourceDataService.subscribe(source).subscribe(item => console.log(item));
  }

  unsubscribe(source: Source) {
    source.removeUser(this.user);
    this._sourceDataService.unsubscribe(source).subscribe(item => console.log(item));
    
  }
}
