import type { ReactElement, ReactNode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

type Props = {
  children: ReactNode;
};

export function DnDProviderSetup({ children }: Props): ReactElement {
  return (
    <DndProvider backend={HTML5Backend}>
      <DndProvider backend={TouchBackend}>{children}</DndProvider>
    </DndProvider>
  );
}
