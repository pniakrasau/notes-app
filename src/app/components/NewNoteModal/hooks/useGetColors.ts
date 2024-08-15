import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query/src/types';

import { getNoteColors } from '~/notes/mock/mock.api';
import type { NoteColorsResponse } from '~/notes/models/note.model';

const getQueryKey = () => ['note-colors'];

export type ColorOptions = { name: string; value: string }[];

export function useGetColors(): UseQueryResult<ColorOptions, unknown> {
  return useQuery<NoteColorsResponse, unknown, ColorOptions>({
    queryKey: getQueryKey(),
    queryFn: getNoteColors,
    select: (data) => {
      const colors = data.data;
      return Object.entries(colors).map(([name, value]) => ({
        name,
        value,
      }));
    },
  });
}

useGetColors.getQueryKey = getQueryKey;
