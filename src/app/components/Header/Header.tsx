import { Stack, TextField } from '@mui/material';
import type { ChangeEvent, Dispatch, ReactElement, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { AddNewNoteButton } from '~/notes/components/AddNewNoteButton/AddNewNoteButton';
import { headerStyles } from '~/notes/components/Header/Header.style';

type Props = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export function Header({ searchValue, setSearchValue }: Props): ReactElement {
  const { t } = useTranslation();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <Stack
      data-testid="header-container"
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
        placeholder={t('notes:fields.searchInputPlaceholder')}
        sx={headerStyles}
      />
      <AddNewNoteButton data-testid="add-new-note-button" searchValue={searchValue} />
    </Stack>
  );
}
