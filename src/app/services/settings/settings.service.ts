import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  setting: Setting = {
    themeUrl: '/assets/css/colors/default.css',
    theme: 'default'
  };


  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
   }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.setting));
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
      this.setting = JSON.parse(localStorage.getItem('settings'));
      this.applyTheme(this.setting.theme);
    } else {
      this.applyTheme(this.setting.theme);
    }
  }

  applyTheme( theme: string) {
    this._document.getElementById('theme-app').setAttribute('href', `/assets/css/colors/${theme}.css`);
    this.setting.theme = theme;
    this.setting.themeUrl = `/assets/css/colors/${theme}.css`;
    this.saveSettings();
  }
}

interface Setting {
  themeUrl: string;
  theme: string;
}
