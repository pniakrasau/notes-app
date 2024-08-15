import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './i18n/i18n';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { DateLocalizationProviderSetup, MUIThemeProviderSetup, SnackBarProvider } from '~/notes/providers';
import { QueryClientProviderSetup } from '~/notes/providers/QueryClientProviderSetup';

import { App } from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <MUIThemeProviderSetup>
      <QueryClientProviderSetup>
        <DateLocalizationProviderSetup>
          <SnackBarProvider>
            <App />
          </SnackBarProvider>
        </DateLocalizationProviderSetup>
      </QueryClientProviderSetup>
    </MUIThemeProviderSetup>
  </StrictMode>
);
