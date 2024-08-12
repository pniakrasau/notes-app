import { Container, Stack } from '@mui/material';
import type { ReactElement } from 'react';
import { useState } from 'react';

import { Board } from '~/notes/components/Board/Board';
import { Header } from '~/notes/components/Header/Header';
import { useDebouncedValue } from '~/notes/hooks/useDebouncedValue';
import { DnDProviderSetup } from '~/notes/providers/DnDProviderSetup';

const SEARCH_INPUT_DELAY = 1000;

export function App(): ReactElement {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebouncedValue({
    value: searchValue,
    delay: SEARCH_INPUT_DELAY,
  });

  return (
    <Stack height="100vh" gap={3}>
      <Header data-testid="header" searchValue={searchValue} setSearchValue={setSearchValue} />
      <DnDProviderSetup data-testid="dnd-provider">
        <Container data-testid="board-container" maxWidth="lg" sx={{ height: '100%', display: 'flex' }}>
          <Board data-testid="board" searchValue={debouncedValue} />
        </Container>
      </DnDProviderSetup>
    </Stack>
  );
}
