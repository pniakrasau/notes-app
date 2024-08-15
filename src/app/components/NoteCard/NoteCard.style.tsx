import type { Theme } from '@mui/material/styles/createTheme';
import type { SxProps } from '@mui/system/styleFunctionSx';

import { NOTE_CARD_SIZE } from '~/notes/constants/note.constant';
import type { Note } from '~/notes/models/note.model';

type Props = {
  isDragging: boolean;
  note: Note;
};

export const noteStyles: (props: Props) => SxProps<Theme> =
  ({ note, isDragging }) =>
  ({ spacing, palette }) => {
    return {
      cursor: 'pointer',
      display: 'flex',
      width: spacing(NOTE_CARD_SIZE),
      height: spacing(NOTE_CARD_SIZE),
      border: '1px solid',
      borderColor: palette.divider,
      backgroundColor: note.color,
      marginBottom: spacing(2),
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transform: `rotate(${note.position}deg)`,
      opacity: isDragging ? 0 : 1,
    };
  };
