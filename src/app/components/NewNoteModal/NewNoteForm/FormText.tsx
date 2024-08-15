import { InputLabel, Stack, TextField } from '@mui/material';
import type { ReactElement } from 'react';
import type { FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form/dist/types';
import { useTranslation } from 'react-i18next';

type Props<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  disabled?: boolean;
};

const MAX_LENGTH = 100;

export function FormText<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  disabled = false,
}: Props<TFieldValues>): ReactElement {
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: { value: true, message: t('notes:fields:noteTextIsRequired') },
        maxLength: { value: MAX_LENGTH, message: t('notes:fields:lengthShouldBeLessThan', { noteLength: MAX_LENGTH }) },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Stack gap={1}>
          <InputLabel htmlFor="note-text">{label}</InputLabel>
          <TextField
            data-testid="note-text"
            helperText={error?.message}
            error={!!error}
            onChange={onChange}
            value={value}
            multiline
            maxRows={3}
            minRows={3}
            disabled={disabled}
          />
        </Stack>
      )}
    />
  );
}
