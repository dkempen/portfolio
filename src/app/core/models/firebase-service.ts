export interface IFirebaseService {
  logEvent(event: LogEvent, data?: object): void;
}

export enum LogEvent {
  FormSubmitted = 'form_submitted',
  GithubClicked = 'github_clicked',
  LinkedInClicked = 'linkedin_clicked',
  MailClicked = 'mail_clicked',
}
