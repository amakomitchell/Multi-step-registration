import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DashboardService } from '../../dashboard.service';
import { Dashboard } from '../../dashboard';

@Component({
    selector: './app-te-weekly',
    templateUrl: './te-weekly.component.html',
    styleUrls: ['./te-weekly.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TimesheetWeeklyComponent {
    private dashboard : Dashboard[] = [];

    private dashboardObservable: Observable<Dashboard[]>;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private dashboardService: DashboardService) { 

                    // this.dashboardObservable = this.dashboardService.get_dashboardWeekly();
                    this.dashboardService.get_dashboardWeekly().subscribe((res : Dashboard[]) => {
                        console.log(res);
                        this.dashboard = res;
                    })
                }
    
    ngOnInit() {

    }
    
}
