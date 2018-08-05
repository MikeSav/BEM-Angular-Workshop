import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

    constructor(private http: HttpClient) {
    }

    public getWorkorders(): Observable<any> {
        return this.http.get('../../assets/data/workorder-data.json');
    }
}
