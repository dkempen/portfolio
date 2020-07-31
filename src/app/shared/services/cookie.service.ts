import { Injectable } from '@angular/core';

import { Cookie } from '../models/cookie';
import { CookieService as NgxCookieService } from 'ngx-cookie-service';
import { Apod } from '../models/apod';

@Injectable({
    providedIn: 'root'
})
export class CookieService {

    private readonly cookieName = 'pref';
    private readonly expiryDays = 7;

    constructor(private cookieService: NgxCookieService) {
        this.updateExpiryDate();
    }

    getCookie(): Cookie {
        let cookieString = this.cookieService.get(this.cookieName);
        let cookie: Cookie = null;
        if (cookieString === '') {
            cookie = new Cookie();
            this.setCookie(cookie);
        } else {
            cookie = JSON.parse(cookieString);
        }
        return cookie;
    }

    setCookie(cookie: Cookie) {
        // console.log(cookie);
        this.cookieService.set(this.cookieName, JSON.stringify(cookie), new Date().getDate() + this.expiryDays, '/');
    }

    getLanguage() {
        return this.getCookie().language;
    }

    setLanguage(language: string) {
        const cookie = this.getCookie();
        cookie.language = language;
        this.setCookie(cookie);
    }

    getNightMode() {
        return this.getCookie().nightMode;
    }

    setNightMode(nightMode: boolean) {
        const cookie = this.getCookie();
        cookie.nightMode = nightMode;
        this.setCookie(cookie);
    }

    getApod() {
        return this.getCookie().apod;
    }

    setApod(apod: Apod) {
        const cookie = this.getCookie();
        cookie.apod = apod;
        cookie.apodDate = new Date();
        this.setCookie(cookie);
    }

    getApodDate() {
        return this.getCookie().apodDate;
    }

    private updateExpiryDate() {
        this.setCookie(this.getCookie());
    }
}
