import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box } from '@mui/material';
import type { ReactElement } from 'react';

export function Footer(): ReactElement {
  return (
    <Box
      data-testid="header-container"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      marginTop={2}
      height={({ spacing }) => spacing(10)}
    >
      <Box>
        <DeleteOutlineIcon sx={{ width: '70px', height: '70px' }} />
      </Box>
    </Box>
  );
}
