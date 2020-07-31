import { Apod } from './apod';

export class Cookie {
    language: string;
    nightMode: boolean;
    apod: Apod;
    apodDate: Date;

    constructor() {
        this.language = 'en';
        this.nightMode = true;
        this.apod = new Apod();
    }
}
