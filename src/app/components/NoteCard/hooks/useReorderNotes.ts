import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query/src/types';
import { useTranslation } from 'react-i18next';

import type { MoveNoteProps } from '~/notes/components/Board';
import type { ReorderNoteProps } from '~/notes/mock/mock.api';
import { reorderNotes } from '~/notes/mock/mock.api';
import type { Note } from '~/notes/models/note.model';
import { useSnackBar } from '~/notes/providers/SnackBarProvider';

type Props = {
  moveCard: ({ dragIndex, hoverIndex }: MoveNoteProps) => void;
};

export function useReorderNotes({ moveCard }: Props): UseMutationResult<Note[], Error, ReorderNoteProps> {
  const { showMessage } = useSnackBar();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: reorderNotes,
    // Optimistic update for better UX
    onMutate: async ({ dragIndex, hoverIndex }) => {
      await queryClient.cancelQueries({ queryKey: ['notes'] });
      moveCard({ dragIndex, hoverIndex });
    },
    onError: ({ message }, { hoverIndex, dragIndex }) => {
      moveCard({ hoverIndex, dragIndex });
      showMessage({ text: t(`notes:errors:${message}`), severity: 'error' });
    },
  });
}
