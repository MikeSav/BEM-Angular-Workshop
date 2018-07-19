import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private http: HttpClient) {
    }

    public getDashboardData(): Observable<any> {
        return this.http.get('../../assets/data/dashboard-data.json');
    }
}
