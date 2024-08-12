import { useContext } from 'react';

import type { SnackBarContextType } from '~/notes/providers/SnackBarProvider/SnackBarContext';
import { SnackBarContext } from '~/notes/providers/SnackBarProvider/SnackBarContext';

export const useSnackBar = (): SnackBarContextType => {
  const context = useContext(SnackBarContext);
  if (!context) {
    throw new Error('useSnackBar must be used within a SnackBarProvider');
  }
  return context;
};
