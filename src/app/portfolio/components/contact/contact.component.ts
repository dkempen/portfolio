import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { LogEvent } from '../../../core/models/firebase-service';
import { FirebaseService } from '../../../core/services/firebase/firebase.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslateModule, NgbTooltip, ContactFormComponent],
  standalone: true,
})
export class ContactComponent {
  contacts: Contact[] = [
    {
      name: 'GitHub',
      uri: 'https://github.com/dkempen',
      callback: LogEvent.GithubClicked,
      icon: 'bi-github',
    },
    {
      name: 'LinkedIn',
      uri: 'https://www.linkedin.com/in/daan-van-kempen',
      callback: LogEvent.LinkedInClicked,
      icon: 'bi-linkedin',
    },
    {
      name: 'Email',
      uri: 'mailto:info@daanvankempen.nl',
      callback: LogEvent.MailClicked,
      icon: 'bi-envelope-fill',
    },
  ];

  constructor(private firebaseService: FirebaseService) {}

  public onContactClick(type: LogEvent): void {
    this.firebaseService.logEvent(type);
  }
}

interface Contact {
  name: string;
  uri: string;
  callback: LogEvent;
  icon: string;
}
