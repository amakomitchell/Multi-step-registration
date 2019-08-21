import { Component, OnInit }    from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'te-timesheet',
    templateUrl: './te-timesheet.component.html',
    //styleUrls: './te-timesheet.component.css',
})
export class TimesheetComponent implements OnInit {


    constructor(private service: DashboardService) { }

    ngOnInit() {
        
    }

}

