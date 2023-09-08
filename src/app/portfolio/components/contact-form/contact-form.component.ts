import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ContactForm } from '../../../shared/models/contact-form';
import { FormspreeService } from '../../../core/services/formspree/formspree.service';
import { FirebaseService } from '../../../core/services/firebase/firebase.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  model: ContactForm = {};

  submitting$ = new BehaviorSubject<boolean>(false);
  succeeded$ = new BehaviorSubject<boolean | undefined>(undefined);

  constructor(
    private formspreeService: FormspreeService,
    private firebaseService: FirebaseService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  onSubmit() {
    this.submitting$.next(true);
    this.formspreeService.sendForm(this.model).subscribe({
      next: () => {
        this.submitting$.next(false);
        this.succeeded$.next(true);
        this.firebaseService.logEvent('form_submitted', this.model);
      },
      error: () => {
        this.submitting$.next(false);
        this.succeeded$.next(false);
      },
    });
  }
}
