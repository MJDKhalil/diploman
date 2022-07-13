import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const Languages = ['ar', 'en', 'fr']

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // lng: 'en',
    react: {
      useSuspense: true,
    },
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supported: ["en", "fr", "ar"],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'subdomain'],
      // order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    debug: false,
    whitelist: Languages,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    nsSeperator: false,
    keySeperator: false,
    backend: {
      loadPath: '/static/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;