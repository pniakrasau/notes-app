import type { Theme } from '@mui/material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { JSX, ReactNode } from 'react';

import { theme } from '../../theme/theme';

interface MUIThemeProviderProps {
  children: ReactNode;
}

export function MUIThemeProviderSetup({ children }: MUIThemeProviderProps): JSX.Element {
  return (
    <ThemeProvider<Theme> theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </ThemeProvider>
  );
}
