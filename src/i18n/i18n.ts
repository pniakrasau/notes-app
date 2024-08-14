import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import notes from './locales/en/notes.json';

const I18N_NAMESPACE = 'notes-app';
const DEFAULT_LOCALE = 'en';

// Add custom types
i18next.use(initReactI18next).init({
  fallbackLng: DEFAULT_LOCALE,
  ns: I18N_NAMESPACE,
  lng: DEFAULT_LOCALE,
  debug: false,
  resources: {
    en: {
      notes,
    },
  },
});
