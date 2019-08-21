import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TimesheetComponent } from './te-timesheet/te-timesheet.component';
import { AssignmentComponent } from './te-assignment/te-assignment.component';

const timeentryRoutes: Routes = [
    { path:'', component: DashboardComponent, children: [
        { path: 'timesheets', component: TimesheetComponent },
        { path: 'assignments', component: AssignmentComponent }
    ] },
]
@NgModule({
    imports: [
        RouterModule.forChild(timeentryRoutes)
    ],
    exports: [RouterModule],
})
export class DashboardRoutingModule {

}