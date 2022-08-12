import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { locale } from 'moment';
import 'moment/min/locales';

import * as EN from '../locales/en';
import * as ES from '../locales/es';
import * as RU from '../locales/ru';
import * as PT from '../locales/pt';

// the translations
const resources = {
  es: {},
  en: {},
  ru: {},
  pt: {},
};

const arrayLanguajes = [
  { resource: EN, lang: 'en' },
  { resource: ES, lang: 'es' },
  { resource: RU, lang: 'ru' },
  { resource: PT, lang: 'pt' },
];

arrayLanguajes.forEach(({ resource, lang }) => {
  if (!!resource) {
    Object.keys(resource).forEach((name) => {
      if (resources[lang]) {
        resources[lang][name] = resource[name];
      } else {
        console.error(`Resource ${lang} is not defined`);
      }
    });
  } else {
    console.error(`Resource ${lang} is undefined`);
  }
});

const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  debug: process.env.NODE_ENV !== 'production',
  resources,
  fallbackLng: 'es',
  ns: ['common'],
  defaultNS: 'common',
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'common.json',
  },
};

i18n.on('languageChanged', function (lng) {
  const momentLng = lng.split('-')[0];
  locale(momentLng);
});

i18n
  .use(LanguageDetector) // passes i18n down to react-i18next
  .init(options);

export default i18n;
