import { InputLabel, Stack } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import type { ReactElement } from 'react';
import type { FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form/dist/types';

type Props<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
};

const currentDate = new Date();
const minDate = dayjs(currentDate);
const maxDate = dayjs(currentDate).add(1, 'year');

export function FormDate<TFieldValues extends FieldValues>({
  name,
  label,
  control,
}: Props<TFieldValues>): ReactElement {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Stack gap={1}>
          <InputLabel htmlFor="note-due-date">{label}</InputLabel>
          <DesktopDatePicker
            data-testid="note-due-date"
            value={value}
            onChange={onChange}
            disablePast
            format="MM-DD-YYYY"
            minDate={minDate}
            maxDate={maxDate}
            slotProps={{
              textField: {
                disabled: true,
              },
            }}
          />
        </Stack>
      )}
    />
  );
}
