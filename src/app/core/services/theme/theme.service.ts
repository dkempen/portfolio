import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Themes } from '../../../shared/models/themes';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: BehaviorSubject<Themes>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private storageService: StorageService
  ) {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () =>
        this.setTheme(storageService.getTheme())
      );
    const theme = storageService.getTheme();
    this.theme = new BehaviorSubject<Themes>(theme);
    this.setTheme(theme);
  }

  public get theme$(): Observable<Themes> {
    return this.theme.asObservable();
  }

  public getPreferredTheme(theme: Themes): Themes {
    if (theme && theme !== Themes.Auto) return theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Themes.Dark
      : Themes.Light;
  }

  public setTheme(theme: Themes): void {
    this.document.documentElement.setAttribute(
      'data-bs-theme',
      this.getPreferredTheme(theme)
    );
    this.storageService.setTheme(theme);
    this.theme.next(theme);
  }
}
