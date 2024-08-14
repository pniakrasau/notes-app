import { Alert, Snackbar } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import type { SnackBarMessage } from '~/notes/providers/SnackBarProvider/SnackBarContext';
import { SnackBarContext } from '~/notes/providers/SnackBarProvider/SnackBarContext';

type Props = {
  children: ReactNode;
};

// @TODO(pniakras): create messages Stack so multiple messages can be shown
export function SnackBarProvider({ children }: Props): ReactElement {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<SnackBarMessage | undefined>();

  // NOTE: useMemo and useCallback are not necessary here, I see no complex computation or dependencies
  // @pniakras: useMemo is necessary here cause we use it in Provider. It is common practice and have appropriate linter rule
  const showMessage = useCallback((snackBarMessage: SnackBarMessage): void => {
    setMessage(snackBarMessage);
    setOpen(true);
  }, []);

  const handleCloseSnackBar = (): void => {
    setOpen(false);
  };

  const value = useMemo(() => {
    return { showMessage };
  }, [showMessage]);

  // NOTE: Add close button to the snackbar
  // @pniakras: MUI snackbar has close button already (by default)
  return (
    <SnackBarContext.Provider value={value}>
      {children}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleCloseSnackBar}>
        <Alert severity={message?.severity || 'info'} onClose={handleCloseSnackBar}>
          {message?.text}
        </Alert>
      </Snackbar>
    </SnackBarContext.Provider>
  );
}
