import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const components: (theme: Theme) => Components<Omit<Theme, 'components'>> = ({ palette }) => ({
  MuiInputBase: {
    styleOverrides: {
      root: {
        backgroundColor: palette.background.default,
        border: 'none', // Remove border from the Select component
        '&:focus': {
          backgroundColor: palette.background.default,
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: {
        '& .MuiPaper-root': {
          padding: '2rem',
          borderRadius: 0,
        },
      },
    },
  },
});
