import { Component, OnInit }    from '@angular/core';
import { DashboardService } from './dashboard.service';
import { IAssignment } from '../shared/models/assignment.model';
import { ConfigurationService } from '../shared/services/configuration.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    //styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        

    }

    getAssignments() {
        
    }


}

