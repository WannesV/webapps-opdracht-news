import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { SourceDataService } from './source-data.service';
import { Source } from './source.model';

@Injectable()
export class SourceResolver implements Resolve<Source> {
    constructor(private sourceService: SourceDataService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Source> {
                return this.sourceService.getSource(route.params['id']);
            }
 }