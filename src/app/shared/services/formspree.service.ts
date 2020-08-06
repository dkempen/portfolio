import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FormspreeService {

    private readonly formspreeUrl = 'https://formspree.io/';
    private readonly formspreeId = 'mzbjoojr';

    constructor(private http: HttpClient) { }

    onSumbitButton(formName: string, formEmail: string, formMessage: string) {
        const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.formspreeUrl + this.formspreeId,
            {
                name: formName,
                replyto: formEmail,
                message: formMessage
            },
            {
                headers: httpHeaders
            });
    }
}
