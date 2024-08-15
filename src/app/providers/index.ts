import { QueryClientProvider } from '@tanstack/react-query';

import { DateLocalizationProviderSetup } from '~/notes/providers/DateLocalizationProviderSetup';
import { DnDProviderSetup } from '~/notes/providers/DnDProviderSetup';
import { MUIThemeProviderSetup } from '~/notes/providers/MUIThemeProviderSetup';
import { SnackBarProvider } from '~/notes/providers/SnackBarProvider/SnackBarProvider';

export {
  DateLocalizationProviderSetup,
  DnDProviderSetup,
  MUIThemeProviderSetup,
  QueryClientProvider,
  SnackBarProvider,
};
