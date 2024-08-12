import type { AlertColor, AlertPropsColorOverrides } from '@mui/material/Alert/Alert';
import type { OverridableStringUnion } from '@mui/types';
import { createContext } from 'react';

export type SnackBarMessage = {
  text: string;
  severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
};

export type SnackBarContextType = {
  showMessage: (message: SnackBarMessage) => void;
};
export const SnackBarContext = createContext<SnackBarContextType>({ showMessage: () => {} });
