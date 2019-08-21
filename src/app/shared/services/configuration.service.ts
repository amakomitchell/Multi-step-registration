import { Injectable } from '@angular/core';
//import { Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IConfiguration } from '../models/configuration.model';
import { StorageService } from './storage.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import { Subject }  from 'rxjs/Subject';

@Injectable()
export class ConfigurationService {

    serverSettings: IConfiguration;    
    private settingsLoadedSource = new Subject();
    settingsLoaded$ = this.settingsLoadedSource.asObservable();
    isReady: boolean = false;
    
    constructor(private http: HttpClient, private storageService: StorageService) {}

    // load() {
    //     const baseURI = document.baseURI.endsWith('/') ? document.baseURI : `${document.baseURI}/`;
    //     let url = `${baseURI}Home/Configuration`;

    //     this.http.get(url).subscribe((response: Response) => {
    //         console.log('server settings loaded');
    //         this.serverSettings = response.json();
    //         console.log(this.serverSettings);
    //         this.storageService.store('timeentryUrl', this.serverSettings.timeentryUrl);            
    //         this.isReady = true;
    //         this.settingsLoadedSource.next();
    //     });

    // }

    // load() {
    //     const baseURI = document.baseURI.endsWith('/') ? document.baseURI : `${document.baseURI}/`;
    //     let url = `${baseURI}Home/Configuration`;

    //     //this.http.get<IConfiguration[]>(url).do(data =>)

    //     this.http.get(url).subscribe((response: HttpResponse<IConfiguration>) => {
    //         console.log('server settings loaded');
    //         this.serverSettings = HttpResponse<response>;
    //         console.log(this.serverSettings);
    //         this.storageService.store('timeentryUrl', this.serverSettings.timeentryUrl);            
    //         this.isReady = true;
    //         this.settingsLoadedSource.next();
    //     });

    // }
}
