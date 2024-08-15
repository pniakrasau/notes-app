import { Alert, Snackbar } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import type { SnackBarMessage } from '~/notes/providers/SnackBarProvider';
import { SnackBarContext } from '~/notes/providers/SnackBarProvider';

type Props = {
  children: ReactNode;
};

export function SnackBarProvider({ children }: Props): ReactElement {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<SnackBarMessage | undefined>();

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
