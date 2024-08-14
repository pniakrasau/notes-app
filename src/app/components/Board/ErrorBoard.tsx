import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Box, IconButton, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetNotes } from '~/notes/components/Board/hooks/useGetNotes';

type Props = {
  searchValue: string;
};

export function ErrorBoard({ searchValue }: Props): ReactElement {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const handleRefresh = async (): Promise<void> => {
    await queryClient.invalidateQueries({ queryKey: useGetNotes.getQueryKey({ searchValue }) });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flex="1">
      <Typography variant="h3" color="error">
        {t('notes:errors.common')}
      </Typography>
      <IconButton onClick={handleRefresh} color="error">
        <AutorenewIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}
