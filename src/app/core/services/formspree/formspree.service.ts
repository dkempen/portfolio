import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactForm } from '../../../shared/models/contact-form';

@Injectable({
  providedIn: 'root',
})
export class FormspreeService {
  private readonly formspreeUrl = 'https://formspree.io/';
  private readonly formspreeId = 'mzbjoojr';

  constructor(private http: HttpClient) {}

  public sendForm(contactForm: ContactForm): Observable<object> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      `${this.formspreeUrl}${this.formspreeId}`,
      {
        name: contactForm.name,
        replyto: contactForm.email,
        message: contactForm.message,
      },
      {
        headers: httpHeaders,
      }
    );
  }
}
