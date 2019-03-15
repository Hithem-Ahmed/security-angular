import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { RestService, AuthenticationService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    getMessage = '';
    postMessage = '';


    constructor(private authenticationService : AuthenticationService, private restService: RestService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.checkAccess();
    }

    private checkAccess() {
        this.authenticationService.checkAccess().pipe(first()).subscribe(users => {});
    }

    onClickGet() {
        this.restService.get().pipe(first()).subscribe(response => {this.getMessage = JSON.stringify(response);});
    }

    onClickPost() {
        this.restService.post(this.currentUser.firstName).pipe(first()).subscribe(response => {this.postMessage = JSON.stringify(response);});
    }


}
