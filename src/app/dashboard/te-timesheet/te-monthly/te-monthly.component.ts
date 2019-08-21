import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-te-monthly',
  templateUrl: './te-monthly.component.html',
  styleUrls: ['./te-monthly.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimesheetMonthlyComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.monthly_dashboards = this.dashboardService.getMonthlyDashboards();
  }

  displayMonthly() {
    this.router.navigate(['month'], {relativeTo: this.route});
  }
  

}
