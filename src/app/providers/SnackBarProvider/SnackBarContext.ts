import { createContext } from 'react';

import type { SnackBarMessage } from '~/notes/providers/SnackBarProvider/models/snackbarMessage.model';

export type SnackBarContextType = {
  showMessage: (message: SnackBarMessage) => void;
};

export const SnackBarContext = createContext<SnackBarContextType>({ showMessage: () => {} });
