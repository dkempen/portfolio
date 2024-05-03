import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FirebaseService } from '../../../core/services/firebase/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  contacts: Contact[] = [
    {
      name: 'GitHub',
      uri: 'https://github.com/dkempen',
      callback: 'github_clicked',
      icon: 'bi-github',
    },
    {
      name: 'LinkedIn',
      uri: 'https://www.linkedin.com/in/daan-van-kempen',
      callback: 'linkedin_clicked',
      icon: 'bi-linkedin',
    },
    {
      name: 'Email',
      uri: 'mailto:info@daanvankempen.nl',
      callback: 'mail_clicked',
      icon: 'bi-envelope-fill',
    },
  ];

  constructor(private firebaseService: FirebaseService) {}

  public onContactClick(type: string): void {
    this.firebaseService.logEvent(type);
  }
}

interface Contact {
  name: string;
  uri: string;
  callback: string;
  icon: string;
}
