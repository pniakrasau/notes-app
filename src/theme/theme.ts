import { createTheme } from '@mui/material';

import { components } from './components';
import { palette } from './palette';

const themeWithNewPalette = createTheme({
  palette,
});

const themeWithCustomColors = createTheme(themeWithNewPalette, {
  palette: {
    header: themeWithNewPalette.palette.augmentColor({
      color: {
        main: '#5d7f92',
      },
      name: 'header',
    }),
  },
});

export const theme = createTheme({
  ...themeWithCustomColors,
  components: components(themeWithCustomColors),
});
