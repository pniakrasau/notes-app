import { useMemo } from 'react';
import { useDrag } from 'react-dnd';
import type { ConnectDragSource } from 'react-dnd/src/types';

import { NOTE_CARD_DRAGGABLE } from '~/notes/constants/draggable.constans';
import type { Note } from '~/notes/models/note.model';

type CollectData = {
  isDragging: boolean;
};

type Props = {
  note: Note;
};

type ReturnType = {
  isDragging: boolean;
  dragRef: ConnectDragSource;
};

export function useNoteDrag({ note }: Props): ReturnType {
  const [{ isDragging }, dragRef] = useDrag<Note, Note, CollectData>({
    type: NOTE_CARD_DRAGGABLE,
    item: note,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return useMemo(
    () => ({
      isDragging,
      dragRef,
    }),
    [isDragging, dragRef]
  );
}
