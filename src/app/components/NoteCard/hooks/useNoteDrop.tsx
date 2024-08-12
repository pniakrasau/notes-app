import type { MutableRefObject } from 'react';
import { useMemo, useRef } from 'react';
import { useDrop } from 'react-dnd';
import type { ConnectDropTarget } from 'react-dnd/src/types';

import type { MoveNoteProps } from '~/notes/components/Board/hooks/useMoveCard';
import { useReorderNotes } from '~/notes/components/NoteCard/hooks/useReorderNotes';
import { NOTE_CARD_DRAGGABLE } from '~/notes/constants/draggable.constans';
import type { Note } from '~/notes/models/note.model';

type Props = {
  note: Note;
  moveCard: ({ dragIndex, hoverIndex }: MoveNoteProps) => void;
};

type ReturnType = {
  ref: MutableRefObject<HTMLDivElement | undefined>;
  dropRef: ConnectDropTarget;
};

export function useNoteDrop({ note, moveCard }: Props): ReturnType {
  const { mutate } = useReorderNotes({ moveCard });
  const ref = useRef<HTMLDivElement | undefined>(undefined);

  const [, dropRef] = useDrop<Note>({
    accept: [NOTE_CARD_DRAGGABLE],
    collect: (monitor) => ({
      isDragging: monitor.getHandlerId(),
    }),

    // @TODO(pniakras): add overflow elements check for better UX
    hover: (dragged): void => {
      if (!ref.current) {
        return;
      }

      const dragIndex = dragged.id;
      const hoverIndex = note.id;

      if (dragIndex === hoverIndex) {
        return;
      }

      mutate({ hoverIndex, dragIndex });
    },
  });

  return useMemo(
    () => ({
      ref,
      dropRef,
    }),
    [ref, dropRef]
  );
}
