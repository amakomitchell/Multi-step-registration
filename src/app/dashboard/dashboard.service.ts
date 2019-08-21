import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' }
// };

@Injectable()
export class DashboardService {
    baseUrl: string = 'http://localhost/3000';

    constructor(private http: HttpClient) {}

    get_dashboardWeekly(): Observable<any> {
        return this.http.get(this.baseUrl + '/dashboard');
    }
    get_dashboardById(dashboard_id: number) {
        return this.http.get(this.baseUrl + dashboard_id);
    }
    // getAll() {
    //     return this.http.get<Dashboard[]>('');
    // }
 
    // getById(dashboard_id: number) {
    //     return this.http.get('' + dashboard_id);
    // }
 
    // create(dashboard: Dashboard) {
    //     return this.http.post('', dashboard);
    // }
 
    // update(dashboard: Dashboard) {
    //     return this.http.put('' + dashboard.dashboard_id, dashboard);
    // }
 
    // delete(dashboard_id: number) {
    //     return this.http.delete('' + dashboard_id);
    // }
}