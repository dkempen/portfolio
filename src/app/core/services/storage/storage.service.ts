import { Injectable } from '@angular/core';
import { Languages } from '../../../shared/models/languages';
import { Preferences } from '../../../shared/models/preferences';
import { Themes } from '../../../shared/models/themes';
import { IpService } from '../ip/ip.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly STORAGE_KEY = 'preferences';
  private preferences!: Preferences;

  constructor(private ipService: IpService) {
    this.getPreferences();
  }

  public getPreferences(): Preferences {
    if (this.preferences) return this.preferences;

    const preferencesString = localStorage.getItem(this.STORAGE_KEY);
    if (!preferencesString) {
      this.preferences = new Preferences();
      this.setPreferences(this.preferences);
      return this.preferences;
    }
    this.preferences = JSON.parse(preferencesString);
    return this.preferences;
  }

  public setPreferences(preferences: Preferences): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(preferences));
  }

  public getTheme(): Themes {
    return this.getPreferences().theme ?? Themes.Auto;
  }

  public setTheme(theme: Themes): void {
    const preferences = this.getPreferences();
    preferences.theme = theme;
    this.setPreferences(preferences);
  }

  public setLanguage(language: Languages): void {
    const preferences = this.getPreferences();
    preferences.language = language;
    this.setPreferences(preferences);
  }

  public getLanguage(): Languages {
    return this.getPreferences().language ?? Languages.English;
  }

  public async setLastVisit(): Promise<void> {
    const preferences = this.getPreferences();
    preferences.lastVisitDate = new Date().toString();
    this.setPreferences(preferences);
  }

  public async getLastVisit(): Promise<
    [lastVisitDate: Date, lastVisitIp: string]
  > {
    const preferences = this.getPreferences();
    const lastVisitDate = preferences.lastVisitDate ?? new Date();
    const lastVisitIp =
      preferences.lastVisitIp ?? (await this.ipService.getIp()) ?? '127.0.0.1';
    this.setLastVisit();
    return [new Date(lastVisitDate), lastVisitIp];
  }
}
