import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query/src/types';
import { useTranslation } from 'react-i18next';

import { useGetNotes } from '~/notes/components/Board/hooks/useGetNotes';
import type { AddNoteProps } from '~/notes/mock/mock.api';
import { addNote } from '~/notes/mock/mock.api';
import type { Note } from '~/notes/models/note.model';
import { useSnackBar } from '~/notes/providers/SnackBarProvider';

type Props = {
  searchValue: string;
  onSuccess: () => void;
};

export const useAddNote = ({ searchValue, onSuccess }: Props): UseMutationResult<Note, Error, AddNoteProps> => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showMessage } = useSnackBar();

  return useMutation({
    mutationFn: addNote,
    onSuccess: () => {
      showMessage({ text: t(`notes:success:noteAdded`), severity: 'success' });
      queryClient.invalidateQueries({ queryKey: useGetNotes.getQueryKey({ searchValue }) });
      onSuccess();
    },
    onError: ({ message }) => {
      showMessage({ text: t(`notes:errors:${message}`), severity: 'error' });
    },
  });
};
