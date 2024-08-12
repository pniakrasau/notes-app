import type { Theme } from '@mui/material/styles/createTheme';
import type { SxProps } from '@mui/system/styleFunctionSx';

import { NOTE_CARD_SIZE } from '~/notes/constants/note.constant';

export const noteSkeletonLoaderItemStyle: SxProps<Theme> = ({ spacing }) => ({
  width: spacing(NOTE_CARD_SIZE),
  height: spacing(NOTE_CARD_SIZE),
});
