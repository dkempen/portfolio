import { Languages } from './languages';
import { Themes } from './themes';

export class Preferences {
  theme?: Themes;
  language?: Languages;
  lastVisitDate?: string;
  lastVisitIp?: string;

  constructor() {
    this.theme = Themes.Dark;
    this.lastVisitDate = new Date().toString();
  }
}
