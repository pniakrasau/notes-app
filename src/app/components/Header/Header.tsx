import { Stack, TextField } from '@mui/material';
import type { ChangeEvent, Dispatch, ReactElement, SetStateAction } from 'react';

import { AddNewNoteButton } from '~/notes/components/AddNewNoteButton/AddNewNoteButton';

type Props = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export function Header({ searchValue, setSearchValue }: Props): ReactElement {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <Stack
      data-testid="header"
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={2}
      p={2}
      bgcolor="header.main"
    >
      <TextField
        data-testid="search-input"
        onChange={handleInputChange}
        value={searchValue}
        type="search"
        placeholder="Seacrh note by text..."
        sx={({ spacing }) => ({ width: spacing(50) })}
      />
      <AddNewNoteButton searchValue={searchValue} />
    </Stack>
  );
}
