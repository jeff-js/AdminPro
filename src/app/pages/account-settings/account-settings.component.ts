import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _shared: SettingsService) { }


  ngOnInit() {
    this.applyLoadCheck();
  }

  changeColor(theme: string, link: any) {
    this.applyCheck(link);
    this._shared.applyTheme(theme);
  }

  applyCheck(link: any) {
    const selectores: any = this._document.getElementsByClassName('selector');
    for (const ref of  selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }


  applyLoadCheck() {
    const selectores: any = this._document.getElementsByClassName('selector');
    const theme = this._shared.setting.theme;
    for (const ref of  selectores) {
      if ( ref.getAttribute('data-theme') === theme ) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
