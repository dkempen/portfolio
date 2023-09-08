import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../../../shared/models/languages';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private language: BehaviorSubject<Languages>;
  get language$(): Observable<Languages> {
    return this.language.asObservable();
  }

  constructor(
    private translate: TranslateService,
    private storageService: StorageService
  ) {
    const language = storageService.getLanguage();
    this.language = new BehaviorSubject<Languages>(language);
    this.setLanguage(language);
  }

  getPreferredTheme(language: Languages): Languages {
    if (language) return language;
    return <Languages>navigator.language;
  }

  setLanguage(language: Languages) {
    this.storageService.setLanguage(language);
    this.translate.use(language);
    this.language.next(language);
  }
}
