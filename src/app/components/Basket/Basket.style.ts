import type { Theme } from '@mui/material/styles/createTheme';
import type { SxProps } from '@mui/system/styleFunctionSx';

type Props = {
  isHovering: boolean;
};

export const basketStyles: ({ isHovering }: Props) => SxProps<Theme> =
  ({ isHovering }) =>
  ({ spacing }) => ({
    fontSize: isHovering ? spacing(15) : spacing(12),
  });
