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
import locale from 'dayjs/locale/en-gb'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import weekOfYear from 'dayjs/plugin/weekOfYear'


dayjs.locale(locale)
dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)

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