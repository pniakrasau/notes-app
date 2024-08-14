import { Box, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form/dist/types';

type OptionType = {
  name: string;
  value: string;
};

type Props<TFieldValues extends FieldValues, TOption extends OptionType> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  options: TOption[];
  label: string;
  disabled: boolean;
};

export function FormSelect<TFieldValues extends FieldValues, TOption extends OptionType>({
  name,
  label,
  control,
  options,
  disabled,
}: Props<TFieldValues, TOption>): ReactElement {
  return (
    <Controller
      name={name}
      rules={{ required: true }}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Stack gap={1}>
          <InputLabel htmlFor="note-color">{label}</InputLabel>
          <Select
            id="note-color"
            data-testid="note-color"
            value={value}
            onChange={onChange}
            disabled={disabled}
            variant="outlined"
          >
            {options.map(({ name: optionName, value: optionValue }) => (
              <MenuItem key={optionName} value={optionValue}>
                <Stack direction="row" gap={1}>
                  <Box sx={{ width: '20px', height: '20px', backgroundColor: optionValue }} />
                  <Typography variant="body1">{optionName}</Typography>
                </Stack>
              </MenuItem>
            ))}
          </Select>
        </Stack>
      )}
    />
  );
}
