import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import {store} from './app/store'
import './index.css';
import PageLoader from './components/PageLoader';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={<PageLoader />}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </React.Suspense>
    </Provider>
  </React.StrictMode>
);
