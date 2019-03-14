import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../_models';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {

        console.log(btoa("password"));

        // store user details and basic auth credentials in local storage
        // to keep user logged in between page refreshes
        let user : User = new User();
        user.firstName = username;
        user.authdata = window.btoa(username + ':' + password);
        localStorage.setItem('currentUser', JSON.stringify(user));

        return this.http.get<any>(`/resource`).pipe(map(user => {
                                                               // login successful if there's a user in the response
                                                                console.log(user);
                                                               return user;
                                                           }));;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    checkAccess() {
            return this.http.get<any>(`/resource`).pipe(map(user => {
                                                                   // login successful if there's a user in the response
                                                                    console.log(user);
                                                                   return user;
                                                               }));;
    }
}
