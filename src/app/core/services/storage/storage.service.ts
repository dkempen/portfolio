import { Injectable } from '@angular/core';
import { Preferences } from '../../../shared/models/preferences';
import { Themes } from '../../../shared/models/themes';
import { Languages } from '../../../shared/models/languages';
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

  getPreferences(): Preferences {
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

  setPreferences(preferences: Preferences): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(preferences));
  }

  getTheme(): Themes {
    return this.getPreferences().theme ?? Themes.Auto;
  }

  setTheme(theme: Themes): void {
    const preferences = this.getPreferences();
    preferences.theme = theme;
    this.setPreferences(preferences);
  }

  setLanguage(language: Languages): void {
    const preferences = this.getPreferences();
    preferences.language = language;
    this.setPreferences(preferences);
  }

  getLanguage(): Languages {
    return this.getPreferences().language ?? Languages.English;
  }

  async setLastVisit(): Promise<void> {
    const preferences = this.getPreferences();
    preferences.lastVisitDate = new Date().toString();
    // preferences.lastVisitIp = await this.ipService.getIp();
    this.setPreferences(preferences);
  }

  async getLastVisit(): Promise<[lastVisitDate: Date, lastVisitIp: string]> {
    const preferences = this.getPreferences();
    const lastVisitDate = preferences.lastVisitDate ?? new Date();
    const lastVisitIp =
      preferences.lastVisitIp ?? (await this.ipService.getIp()) ?? '127.0.0.1';
    this.setLastVisit();
    return [new Date(lastVisitDate), lastVisitIp];
  }
}
