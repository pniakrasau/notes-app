import { Box, Button } from '@mui/material';
import type { ReactElement } from 'react';
import { useState } from 'react';

import { NewNoteModal } from '~/notes/components/NewNoteModal/NewNoteModal';

type Props = {
  searchValue: string;
};

export function AddNewNoteButton({ searchValue }: Props): ReactElement {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenModal = (): void => {
    setIsOpened(true);
  };
  const handleCloseModal = (): void => {
    setIsOpened(false);
  };

  return (
    <Box data-testid="add-new-note-container" display="flex">
      <Button data-testid="add-new-note-button" onClick={handleOpenModal} variant="outlined">
        Create new Note
      </Button>
      <NewNoteModal
        data-testid="add-new-note-modal"
        handleClose={handleCloseModal}
        isOpened={isOpened}
        searchValue={searchValue}
      />
    </Box>
  );
}
