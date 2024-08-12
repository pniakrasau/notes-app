import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export function NoCards(): ReactElement {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flex="1">
      <Typography data-testid="no-cards-text" variant="h3">
        No note cards available.
      </Typography>
    </Box>
  );
}
