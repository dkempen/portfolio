import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Languages } from '../../../shared/models/languages';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private language: BehaviorSubject<Languages>;

  constructor(
    private translate: TranslateService,
    private storageService: StorageService
  ) {
    const language = storageService.getLanguage();
    this.language = new BehaviorSubject<Languages>(language);
    this.setLanguage(language);
  }

  public get language$(): Observable<Languages> {
    return this.language.asObservable();
  }

  public getPreferredTheme(language: Languages): Languages {
    if (language) return language;
    return <Languages>navigator.language;
  }

  public setLanguage(language: Languages): void {
    this.storageService.setLanguage(language);
    this.translate.use(language);
    this.language.next(language);
  }
}
