import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
//styles
import './index.scss';
//contexts
import { ErrorPromptContextProvider } from './contexts/ErrorPromptContext';
import { UserContextProvider } from './contexts/UserContext';
//dayjs
import dayjs from 'dayjs';
import locale from 'dayjs/locale/lv';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Инициализация dayjs
dayjs.locale(locale);
dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);

// Инициализация i18next
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    lng: 'lv', // Устанавливаем латышский язык по умолчанию
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Путь к файлам локализации
    },
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorPromptContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </ErrorPromptContextProvider>
  </React.StrictMode>
);