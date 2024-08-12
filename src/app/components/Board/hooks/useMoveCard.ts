import type { Dispatch, SetStateAction } from 'react';
import { useCallback } from 'react';

import type { Note } from '~/notes/models/note.model';

type Props = {
  setDraggedNotes: Dispatch<SetStateAction<Note[]>>;
};

export type MoveNoteProps = {
  dragIndex: string;
  hoverIndex: string;
};

type ReturnType = ({ dragIndex, hoverIndex }: MoveNoteProps) => void;

export function useMoveCard({ setDraggedNotes }: Props): ReturnType {
  return useCallback(
    ({ dragIndex, hoverIndex }: MoveNoteProps): void => {
      setDraggedNotes((storedNotes) => {
        return storedNotes.map((note) => {
          if (note.id === dragIndex) {
            return storedNotes.find((replaceToHover) => replaceToHover.id === hoverIndex)!;
          }
          if (note.id === hoverIndex) {
            return storedNotes.find((replaceToDrag) => replaceToDrag.id === dragIndex)!;
          }
          return note;
        });
      });
    },
    [setDraggedNotes]
  );
}
