import type { AlertColor, AlertPropsColorOverrides } from '@mui/material/Alert/Alert';
import type { OverridableStringUnion } from '@mui/types';

export type SnackBarMessage = {
  text: string;
  severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
};
