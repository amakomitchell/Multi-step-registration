// import { Injectable } from '@angular/core';
// import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';

// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/throw';
// import { Observer } from 'rxjs/Observer';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

// import { IConfiguration }   from '../models/configuration.model';
// import { SecurityService } from './security.service';
// import { Guid } from '../../../guid';

// @Injectable()
// export class DataService {
//     private _actionUrl: string;
//     constructor(private http: HttpClient, private securityService: SecurityService, private _configuration: IConfiguration) {
//         this._actionUrl = _configuration.timeentryUrl;
//     }

//     public add<T>(itemName: string, url: string): Observable<T> {
//         const toAdd = JSON.stringify({ ItemName: itemName})
//         if (url.length == 0) {
//             return this.http.post<T>(this._actionUrl, toAdd);
//         } else{
            
//             return this.http.post<T>(url, toAdd);
//         }
        
//     }

//     public update<T>(id: number, itemToUpdate: any, url: string): Observable<T> {
//         return this.http
//             .put<T>(url + id, JSON.stringify(itemToUpdate));
//     }

//     public getSingle<T>(id: number): Observable<T> {
//         return this.http.get<T>(this._actionUrl + id);
//     }

//     get<T>(url: string, params?: any): Observable<T> {   
//         return this.http.get<T>(url).catch(this.handleError);
//     }

    

//     postWithId<T>(url: string, data: any, params?: any): Observable<T> {
//         return this.doPost(url, data, true, params);
//     }

//     post<T>(url: string, data: any, params?: any): Observable<T> {
//         return this.doPost(url, data, false, params);
//     }

//     putWithId<T>(url: string, data: any, params?: any): Observable<T> {
//         return this.doPut(url, data, true, params);
//     }

//     private doPost<T>(url: string, data: any, needId: boolean, params?: any): Observable<T> {        

//         // options.headers = new Headers();
//         // if (this.securityService) {
//         //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
//         // }
//         // if (needId) {
//         //     let guid = Guid.newGuid();
//         //     options.headers.append('x-requestid', guid);
//         // }       

//         return this.http.post(url, data).catch(this.handleError);
//     }

//     private doPut<T>(url: string, data: any, needId: boolean, params?: any): Observable<T> {

//         // options.headers = new Headers();
//         // if (this.securityService) {
//         //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
//         // }
//         // if (needId) {
//         //     let guid = Guid.newGuid();
//         //     options.headers.append('x-requestid', guid);
//         // }        

//         return this.http.put<T>(url, JSON.stringify(data)).catch(this.handleError);
//     }

//     delete(url: string, params?: any) {        

//         console.log('data.service deleting');
        
//         this.http.delete(url).subscribe((res) => {
//             console.log('deleted');
//         });
//     }

//     public deleteSingle<T>(id: number): Observable<T> {
//         return this.http.delete<T>(this._actionUrl + id);
//     }


//     private handleError(error: any) {
//         console.error('server error:', error);
//         if (error instanceof HttpResponse) {
//             let errMessage = '';
//             try {
//                 errMessage = JSON.stringify(error)
//                 //errMessage = error.json();
//             } catch (err) {
//                 errMessage = error.statusText;
//             }
//             return Observable.throw(errMessage);
//         }
//         return Observable.throw(error || 'server error');
//     }  

// }

// export class CustomInterceptor implements HttpInterceptor {

//     constructor(private _securityService: SecurityService) {
        
//     }
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         if (!req.headers.has('Content-Type')) {
//             req = req.clone({ headers: req.headers.set('Content-Type', 'application.json')});
//         }
//         req = req.clone({ headers: req.headers.set('Accept', 'application/json')});  

//         console.log(JSON.stringify(req.headers));
//         return next.handle(req);
//     }
// }