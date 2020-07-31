import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { Apod } from '../models/apod';

@Injectable({
    providedIn: 'root'
})
export class ApodApiService {

    private readonly apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    private readonly apodDate = '&date=';
    private readonly key = '***REMOVED***';

    constructor(private http: HttpClient) { }

    getApod(): Observable<Apod> {
        return this.http.get<Apod>(this.apodUrl + this.key);
    }

    getApodYesterday(date: string): Observable<Apod> {
        return this.http.get<Apod>(this.apodUrl + this.key + this.apodDate + moment(date).subtract(1, 'days').format('YYYY-MM-DD'));
    }
}
