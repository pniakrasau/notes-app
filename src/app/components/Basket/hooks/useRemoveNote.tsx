import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query/src/types';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetNotes } from '~/notes/components/Board/hooks/useGetNotes';
import type { RemoveNoteProps } from '~/notes/mock/mock.api';
import { removeNote } from '~/notes/mock/mock.api';
import type { Note } from '~/notes/models/note.model';
import { useSnackBar } from '~/notes/providers/SnackBarProvider/hooks/useSnackBar';

type Props = {
  searchValue: string;
  setDraggableNotes: Dispatch<SetStateAction<Note[]>>;
};

export function useRemoveNote({
  setDraggableNotes,
  searchValue,
}: Props): UseMutationResult<Note, Error, RemoveNoteProps> {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showMessage } = useSnackBar();
  const queryKey = useGetNotes.getQueryKey({ searchValue });

  return useMutation({
    mutationFn: removeNote,
    onMutate: ({ note }): Note[] => {
      const previousNotes = queryClient.getQueryData<Note[]>(queryKey) || [];
      const updatedNotes = previousNotes.filter((storedNote) => storedNote.id !== note.id);
      setDraggableNotes(updatedNotes);
      queryClient.setQueryData<Note[]>(queryKey, updatedNotes);
      return previousNotes || [];
    },
    onError: (_error, _variables, context = []) => {
      showMessage({ text: _error.message, severity: 'error' });
      queryClient.setQueryData(queryKey, context);
      setDraggableNotes(context);
    },
    onSuccess: () => {
      showMessage({ text: t('notes:success:noteDeleted'), severity: 'success' });
    },
  });
}
