import { Box, Skeleton } from '@mui/material';
import type { ReactElement } from 'react';

import { noteSkeletonLoaderItemStyle } from '~/notes/components/NoteCard/NoteSkeletonLoader/NoteSkeletonLoader.style';

export function NoteSkeletonLoader(): ReactElement {
  return (
    <>
      {Array.from({ length: 4 }, (_, index) => `skeleton-${index}`).map((key) => (
        <Box key={key} sx={noteSkeletonLoaderItemStyle}>
          <Skeleton variant="rectangular" height="100%" width="100%" color="background.default" />
        </Box>
      ))}
    </>
  );
}
