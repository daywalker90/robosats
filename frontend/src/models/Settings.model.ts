import i18n from '../i18n/Web';
import { systemClient } from '../services/System';
import type Coordinator from './Coordinator.model';

export type Language =
  | 'en'
  | 'es'
  | 'ru'
  | 'de'
  | 'pl'
  | 'fr'
  | 'ca'
  | 'it'
  | 'pt'
  | 'eu'
  | 'cs'
  | 'th'
  | 'pl'
  | 'sv'
  | 'zh-SI'
  | 'zh-TR';

class BaseSettings {
  constructor() {
    const modeCookie: 'light' | 'dark' | '' = systemClient.getCookie('settings_mode');
    this.mode =
      modeCookie !== ''
        ? modeCookie
        : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

    const languageCookie = systemClient.getCookie('settings_language');
    this.language =
      languageCookie !== ''
        ? languageCookie
        : i18n.resolvedLanguage == null
        ? 'en'
        : i18n.resolvedLanguage.substring(0, 2);
  }

  public frontend: 'basic' | 'pro' = 'basic';
  public mode: 'light' | 'dark' = 'light';
  public fontSize: number = 14;
  public language?: Language;
  public freezeViewports: boolean = false;
  public network: 'mainnet' | 'testnet' | undefined = 'mainnet';
  public coordinator: Coordinator | undefined = undefined;
  public unsafeClient: boolean = false;
  public hostedClient: boolean = false;
}

export default BaseSettings;