import { Box, Skeleton } from '@mui/material';
import type { ReactElement } from 'react';

import { noteSkeletonLoaderItemStyle } from '~/notes/components/NoteCard/NoteSkeletonLoader/NoteSkeletonLoader.style';

export function NoteSkeletonLoader(): ReactElement {
  return (
    <>
      {Array(4)
        .fill(undefined)
        .map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={index} sx={noteSkeletonLoaderItemStyle}>
            <Skeleton variant="rectangular" height="100%" width="100%" color="background.default" />
          </Box>
        ))}
    </>
  );
}
