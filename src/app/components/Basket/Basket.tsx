import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box } from '@mui/material';
import type { Dispatch, ReactElement, SetStateAction } from 'react';
import { useDrop } from 'react-dnd';

import { basketStyles } from '~/notes/components/Basket/Basket.style';
import { useRemoveNote } from '~/notes/components/Basket/hooks/useRemoveNote';
import { NOTE_CARD_DRAGGABLE } from '~/notes/constants/draggable.constans';
import type { Note } from '~/notes/models/note.model';

type Props = {
  searchValue: string;
  setDraggableNotes: Dispatch<SetStateAction<Note[]>>;
};

export function Basket({ searchValue, setDraggableNotes }: Props): ReactElement {
  const { mutate, isPending } = useRemoveNote({ setDraggableNotes, searchValue });

  const [{ isHovering }, dropRef] = useDrop<Note, unknown, { isHovering: boolean }>({
    accept: [NOTE_CARD_DRAGGABLE],
    collect: (monitor) => ({
      isHovering: monitor.isOver(),
    }),

    drop: (note) => {
      mutate({ note });
    },
  });

  const styles = basketStyles({ isHovering });

  return (
    <Box data-testid="basket" display="flex" justifyContent="center" flex={1}>
      {isPending ? (
        <DeleteIcon fontSize="large" sx={styles} />
      ) : (
        <DeleteOutlineIcon fontSize="large" sx={styles} ref={dropRef} />
      )}
    </Box>
  );
}
