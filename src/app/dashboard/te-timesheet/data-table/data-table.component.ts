import {Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';
//  import { DataSource } from '@angular/cdk';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'data-table',
  styleUrls: ['data-table.component.css'],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    
  }
}

