import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RestService {
    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<any>(`/resource`).pipe(map(response => {
                                                                        return response;
                                                                    }));
    }

    post(userName:string) {
        return this.http.post<string>(`/resource`, userName).pipe(map(response => {
                                                                        return response;
                                                                    }));
    }

}