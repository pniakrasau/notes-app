import type { Theme } from '@mui/material/styles/createTheme';
import type { SxProps } from '@mui/system/styleFunctionSx';

import { NOTE_CARD_SIZE } from '~/notes/constants/note.constant';

export const newNoteModalStyle: SxProps<Theme> = ({ spacing }) => ({
  '.MuiDialog-paper': {
    width: spacing(NOTE_CARD_SIZE * 2),
    height: spacing(NOTE_CARD_SIZE * 2),
  },
});
