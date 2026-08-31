//Tutorial from: https://phrase.com/blog/posts/localizing-react-apps-with-i18next/

// src/i18n/config.ts

// Core i18next library.
import i18n from "i18next";
// Bindings for React: allow components to
// re-render when language changes.
import { initReactI18next } from "react-i18next";
//back end plugin to support downloading json files on the fly
import HttpApi from "i18next-http-backend";
// detects the user's language from the URL, cached
// preference, or browser settings.
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // Wire up the backend as a plugin.
  .use(HttpApi)
  // Auto-detect the visitor's language instead of
  // always defaulting to English.
  .use(LanguageDetector)
  // Add React bindings as a plugin.
  .use(initReactI18next)
  // Initialize the i18next instance.
  .init({
    // Config options

    // No `lng` here — LanguageDetector picks the
    // active language for us (see `detection` below).

    // Fallback locale used when a translation is
    // missing in the active locale, or when the
    // detected language isn't one we support.
    fallbackLng: "en",

    // Enables useful output in the browser’s
    // dev console.
    debug: true,

    supportedLngs: ["en", "es"],

    detection: {
      // Check for an explicit override first, then a
      // previously saved choice, then the browser's
      // own language settings.
      order: ["querystring", "localStorage", "navigator"],
      // Remember an explicit/detected choice across reloads.
      caches: ["localStorage"],
    },

    // Normally, we want `escapeValue: true` as it
    // ensures that i18next escapes any code in
    // translation messages, safeguarding against
    // XSS (cross-site scripting) attacks. However,
    // React does this escaping itself, so we turn 
    // it off in i18next.
    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;