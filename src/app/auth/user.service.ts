import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../shared/models/index';

// const httpOptions = {
//     headers: new Headers({'Content-Type': 'application/json'}),
//     // options: new RequestOptions({headers: this.headers})
//  };

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('https://agonaika.a2hosted.com/api/registrations');
    }
 
    getById(pin: number) {
        return this.http.get('https://agonaika.a2hosted.com/api/registrations/' + pin);
    }
 
    create(user: User) {
        return this.http.post('https://agonaika.a2hosted.com/api/registrations', user);
    }
 
    update(user: User) {
        return this.http.put('https://agonaika.a2hosted.com/api/registrations/' + user.pin, user);
    }
 
    delete(pin: number) {
        return this.http.delete('https://agonaika.a2hosted.com/api/registrations/' + pin);
    }
 
}
