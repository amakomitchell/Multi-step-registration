import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthenticationService {
    token: string;

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>('https://agonaika.a2hosted.com/api/registrations', { email: email, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isAuthenticated() {
        return this.token != null;
    }

    // checkUsers(email: string) {
    //     return this.http.get(this.url)
    //         .map(res => res.json())
    //         .map(users => users.filter(user => user.email === email))
    //         .map(users => !users.length);
    // }
}

