import type { Theme } from '@mui/material/styles/createTheme';
import type { SxProps } from '@mui/system/styleFunctionSx';

export const headerStyles: SxProps<Theme> = ({ spacing }) => ({
  width: spacing(50),
});
