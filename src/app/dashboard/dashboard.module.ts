import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//angular material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule, 
    MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

//ngx imports
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { DashboardComponent } from './dashboard.component';
import { AssignmentComponent } from './te-assignment/te-assignment.component';
import { TimesheetComponent } from './te-timesheet/te-timesheet.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';
import { TimesheetWeeklyComponent } from './te-timesheet/te-weekly/te-weekly.component';
import { TimesheetMonthlyComponent } from './te-timesheet/te-monthly/te-monthly.component';
import { DataTableComponent } from './te-timesheet/data-table/data-table.component';

@NgModule({
    declarations: [
        DashboardComponent,
        AssignmentComponent,
        TimesheetComponent,
        TimesheetWeeklyComponent,
        TimesheetMonthlyComponent,
        DataTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        
        //angular material
        BrowserAnimationsModule,
        MatTableModule, 
        MatPaginatorModule, 
        MatSortModule,
        MatInputModule, 
        MatProgressSpinnerModule,
        CdkTableModule,

        //ngx-bootstrap
        PaginationModule.forRoot(),

        SharedModule,
        DashboardRoutingModule
    ],
    providers: [
        DashboardService
    ]
})
export class DashboardModule {

}