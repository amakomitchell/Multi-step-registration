import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { DashboardService } from '../dashboard.service';
import { IAssignment } from '../../shared/models/assignment.model';

@Component({
    selector: 'te-assignment',
    templateUrl: './te-assignment.component.html'
})
export class AssignmentComponent implements OnInit {
    constructor( private service: DashboardService, private route: ActivatedRoute) { }

    public assignments: IAssignment[];
    assignment: IAssignment;


    ngOnInit() {
        let assignmentId: number = parseInt(this.route.snapshot.params['id']);  
        //this.assignment = this.getAssignmentById(assignmentId);

    }

    getAssignments(timesheetId: number) {

    }

    getAssignmentById(id: number) {
    }
}