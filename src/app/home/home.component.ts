import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { AuthenticationService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;


    constructor(private authenticationService : AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.checkAccess();
    }

    private checkAccess() {
        this.authenticationService.checkAccess().pipe(first()).subscribe(users => {

        });
    }
}
