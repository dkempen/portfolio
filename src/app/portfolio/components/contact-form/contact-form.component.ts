import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { LogEvent } from '../../../core/models/firebase-service';
import { FirebaseService } from '../../../core/services/firebase/firebase.service';
import { FormspreeService } from '../../../core/services/formspree/formspree.service';
import { ContactForm } from '../../../shared/models/contact-form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslateModule, FormsModule],
  standalone: true,
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

  public onSubmit(): void {
    this.submitting$.next(true);
    this.formspreeService.sendForm(this.model).subscribe({
      next: () => {
        this.submitting$.next(false);
        this.succeeded$.next(true);
        this.firebaseService.logEvent(LogEvent.FormSubmitted, this.model);
      },
      error: () => {
        this.submitting$.next(false);
        this.succeeded$.next(false);
      },
    });
  }
}
