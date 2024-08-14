import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

export function NoCards(): ReactElement {
  const { t } = useTranslation();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flex="1">
      <Typography data-testid="no-cards-text" variant="h3">
        {t('notes:common:noCardsText')}
      </Typography>
    </Box>
  );
}
