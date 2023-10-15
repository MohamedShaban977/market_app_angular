import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage: string;

  constructor(public translate: TranslateService) {

    this.currentLanguage = localStorage.getItem('currentLanguage') || 'en';
    this.translate.use(this.currentLanguage);
  }

  changeCurrentLanguage() {
    if (this.currentLanguage == 'en') {
      this._setLanguage('ar')

    }
    else {
      this._setLanguage('en')
    }

  }

  private _setLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('currentLanguage', lang)
  }
}
