import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public settings: object;

  constructor() {
    this.settings = {
      siteName : 'Finta'
    };
  }

  getSettings() {
    return this.settings;
  }

  setAllSettings(settings) {
    this.settings = settings;
  }

  setSetting(name, value) {
    this.settings[name] = value;
  }
}
