import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function DateLocalizationProviderSetup({ children }: Props): ReactElement {
  return <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>;
}
