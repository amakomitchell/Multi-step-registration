import { Injectable }    from '@angular/core';
//import { Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { StorageService } from './storage.service';

@Injectable()
export class SecurityService {
    private storage: StorageService;

    constructor(private _http: HttpClient, private _router: Router, private route: ActivatedRoute, private _storageService: StorageService) {
        this.storage = _storageService;
    }

    public GetToken(): any {
        return this.storage.retrieve('authorizationData');
    }
}
