import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { DateLocalizationProviderSetup } from '~/notes/providers/DateLocalizationProviderSetup';
import { MUIThemeProviderSetup } from '~/notes/providers/MUIThemeProviderSetup';
import { QueryClientProviderSetup } from '~/notes/providers/QueryClientProviderSetup';
import { SnackBarProvider } from '~/notes/providers/SnackBarProvider/SnackBarProvider';

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
