import { InputLabel, Stack, TextField } from '@mui/material';
import type { ReactElement } from 'react';
import type { FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form/dist/types';

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
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: { value: true, message: 'Note text is required' },
        maxLength: { value: MAX_LENGTH, message: `Length should be less than ${MAX_LENGTH}` },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Stack gap={1}>
          <InputLabel htmlFor="note-text">{label}</InputLabel>
          <TextField
            data-testid="note-text"
            helperText={error ? error.message : undefined}
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
