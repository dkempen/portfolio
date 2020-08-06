import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import firebase from 'firebase/app';
import 'firebase/analytics';

import { FormspreeService } from 'src/app/shared/services/formspree.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitting = false;
  error = false;
  succeeded = false;

  constructor(private formspreeService: FormspreeService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
      gotcha: new FormControl()
    });
  }

  onSumbitButton() {
    if (this.contactForm.get('gotcha').value !== null) {
      // Honeypot
      this.error = true;
      return;
    }

    this.submitting = true;
    this.error = false;
    const formName = this.contactForm.get('name').value;
    const formEmail = this.contactForm.get('email').value;
    const formMessage = this.contactForm.get('message').value;
    this.formspreeService.onSumbitButton(formName, formEmail, formMessage).subscribe(() => {
      this.submitting = false;
      this.succeeded = true;
      firebase.analytics().logEvent('form_submitted',
        {
          name: formName,
          email: formEmail,
          message: formMessage
        });
    }, () => {
      this.submitting = false;
      this.error = true;
    }
    );
  }
}
