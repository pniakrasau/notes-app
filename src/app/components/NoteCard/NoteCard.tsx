import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box, darken, Divider, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import { memo } from 'react';

import type { MoveNoteProps } from '~/notes/components/Board/hooks/useMoveCard';
import { useNoteDrag } from '~/notes/components/NoteCard/hooks/useNoteDrag';
import { useNoteDrop } from '~/notes/components/NoteCard/hooks/useNoteDrop';
import { noteStyles } from '~/notes/components/NoteCard/NoteCard.style';
import type { Note } from '~/notes/models/note.model';

type Props = {
  note: Note;
  moveCard: ({ dragIndex, hoverIndex }: MoveNoteProps) => void;
};

export const NoteCard = memo(({ note, moveCard }: Props): ReactElement => {
  const { ref, dropRef } = useNoteDrop({ note, moveCard });
  const { dragRef, isDragging } = useNoteDrag({ note });

  const styles = noteStyles({ note, isDragging });

  dragRef(dropRef(ref));

  return (
    <Box sx={styles} ref={ref}>
      <Stack flex={1} direction="column" justifyContent="flex-start" textAlign="center">
        <Box sx={{ height: '20px', backgroundColor: darken(note.color, 0.2) }} />
        <Box p={2} display="flex" flex={1} flexDirection="column">
          <Typography variant="subtitle1" sx={{ overflowWrap: 'anywhere' }}>
            {note.text}
          </Typography>
        </Box>

        <Divider />
        <Stack direction="row" justifyContent="space-between" textAlign="right" p={1}>
          <CalendarMonthIcon />
          <Typography fontWeight="bolder" variant="subtitle1">
            {note.dueDate?.toDate().toDateString()}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
});
