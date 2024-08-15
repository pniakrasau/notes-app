import { Button, Dialog, Stack } from '@mui/material';
import dayjs from 'dayjs';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useAddNote, useGetColors } from '~/notes/components/NewNoteModal/hooks';
import { FormDate, FormSelect, FormText } from '~/notes/components/NewNoteModal/NewNoteForm';
import { newNoteModalStyle } from '~/notes/components/NewNoteModal/NewNoteModal.style';
import { creteNote } from '~/notes/components/NewNoteModal/utils/note';
import type { Note } from '~/notes/models/note.model';
import { NoteColorsVariants } from '~/notes/models/note.model';

const defaultValues: Note = {
  id: '',
  color: NoteColorsVariants.Brown,
  text: '',
  position: 0,
  dueDate: dayjs(new Date()),
};

type Props = {
  isOpened: boolean;
  handleClose: () => void;
  searchValue: string;
};

export function NewNoteModal({ isOpened, handleClose, searchValue }: Props): ReactElement {
  const { t } = useTranslation();
  const { data: colorOptions, error, isPending: isPendingColors } = useGetColors();
  const { control, reset, handleSubmit } = useForm<Note>({ defaultValues });
  const { mutate, isPending: isPendingNewNote } = useAddNote({
    searchValue,
    onSuccess: () => {
      reset();
      handleClose();
    },
  });

  const onSubmit: SubmitHandler<Note> = (note: Note): void => {
    mutate({
      note: creteNote(note),
    });
  };

  const isFieldDisabled = isPendingNewNote || isPendingColors || Boolean(error);
  const isButtonDisabled = isPendingNewNote || isPendingColors;

  return (
    <Dialog
      data-testid="add-new-note-modal"
      aria-labelledby="add new note modal"
      onClose={handleClose}
      open={isOpened}
      fullWidth
      maxWidth="sm"
      sx={newNoteModalStyle}
      disablePortal
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', display: 'flex' }}>
        <Stack flex={1} gap={2} justifyContent="space-between">
          <FormSelect
            data-testid="add-new-note-color"
            name="color"
            label={t('notes:fields:noteColorLabel')}
            control={control}
            options={colorOptions!}
            disabled={isFieldDisabled}
          />
          <FormText
            data-testid="add-new-note-text"
            name="text"
            control={control}
            label={t('notes:fields:noteTextLabel')}
            disabled={isFieldDisabled}
          />
          <FormDate
            data-testid="add-new-note-due-date"
            name="dueDate"
            control={control}
            label={t('notes:fields:noteDueDateLabel')}
          />
          <Stack direction="row" justifyContent="space-between">
            <Button
              data-testid="add-new-note-close-modal"
              disabled={isButtonDisabled}
              color="error"
              onClick={handleClose}
            >
              {t('notes:buttons:closeNote')}
            </Button>
            <Button data-testid="add-new-note-submit" disabled={isButtonDisabled} type="submit" color="success">
              {t('notes:buttons:createNote')}
            </Button>
          </Stack>
        </Stack>
      </form>
    </Dialog>
  );
}
