import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import type { SnackBarContextType } from '~/notes/providers/SnackBarProvider/SnackBarContext';
import { SnackBarContext } from '~/notes/providers/SnackBarProvider/SnackBarContext';

export const useSnackBar = (): SnackBarContextType => {
  const { t } = useTranslation();
  const context = useContext(SnackBarContext);
  if (!context) {
    throw new Error(t('notes:errors:useInsideProvider'));
  }
  return context;
};
