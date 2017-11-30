import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Source } from './source/source.model';
import { SourceDataService } from './source/source-data.service';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from './user/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  //constructor(private authService: AuthenticationService) {}
  /*
  get currentUser(): Observable<string> {
    return this.authService.user$;
  } 
  */
  ngOnInit() {
  }

}
