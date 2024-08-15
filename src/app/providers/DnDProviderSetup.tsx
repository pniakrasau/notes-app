import { useMediaQuery, useTheme } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

type Props = {
  children: ReactNode;
};

export function DnDProviderSetup({ children }: Props): ReactElement {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const backend = matches ? TouchBackend : HTML5Backend;

  return <DndProvider backend={backend}>{children}</DndProvider>;
}
