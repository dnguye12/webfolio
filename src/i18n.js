import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import common_en from './locales/en/common.json';
import common_fr from "./locales/fr/common.json"

i18next.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: ['en', 'fr'],
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'],
            caches: ['cookie', 'localStorage'],
        },
        react: {
            useSuspense: true,
        },
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { common: common_en },
            fr: { common: common_fr },
        }
    })

export default i18next