import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Apod } from '../models/apod';

@Injectable({
    providedIn: 'root'
})
export class ApodApiService {

    private apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    private apodParams = ''; // &date=2020-07-28
    private key = 'LBLD4492tGeYBtinKowDX5rQC5ZCII8P72eQg9Ix';

    constructor(private http: HttpClient) { }

    getApod(): Observable<Apod> {
        return this.http.get<Apod>(this.apodUrl + this.key + this.apodParams);
    }
}
