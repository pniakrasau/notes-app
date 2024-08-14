import { Stack, TextField } from '@mui/material';
import type { ChangeEvent, Dispatch, ReactElement, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { AddNewNoteButton } from '~/notes/components/AddNewNoteButton/AddNewNoteButton';

type Props = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export function Header({ searchValue, setSearchValue }: Props): ReactElement {
  const { t } = useTranslation();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  // NOTE: I would suggest to create styled components
  // @pniakras: kind agree, but in that case I would need to change it everywhere to follow same code style. Let's leave it as it is for now if possible
  return (
    <Stack>
      <TextField
        data-testid="search-input"
        onChange={handleInputChange}
        value={searchValue}
        type="search"
        placeholder={t('notes:fields.searchInputPlaceholder')}
        sx={({ spacing }) => ({ width: spacing(50) })}
      />
      <AddNewNoteButton searchValue={searchValue} />
    </Stack>
  );
}
