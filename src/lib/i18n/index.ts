'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '../../../public/locales/en/common.json';
import enNav from '../../../public/locales/en/nav.json';
import enHome from '../../../public/locales/en/home.json';

import esCommon from '../../../public/locales/es/common.json';
import esNav from '../../../public/locales/es/nav.json';
import esHome from '../../../public/locales/es/home.json';

import frCommon from '../../../public/locales/fr/common.json';
import frNav from '../../../public/locales/fr/nav.json';
import frHome from '../../../public/locales/fr/home.json';

import jaCommon from '../../../public/locales/ja/common.json';
import jaNav from '../../../public/locales/ja/nav.json';
import jaHome from '../../../public/locales/ja/home.json';

const resources = {
  en: {
    common: enCommon,
    nav: enNav,
    home: enHome,
  },
  es: {
    common: esCommon,
    nav: esNav,
    home: esHome,
  },
  fr: {
    common: frCommon,
    nav: frNav,
    home: frHome,
  },
  ja: {
    common: jaCommon,
    nav: jaNav,
    home: jaHome,
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      defaultNS: 'common',
      ns: ['common', 'nav', 'home'],
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
