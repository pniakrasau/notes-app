import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query/src/types';

import { getNotes } from '~/notes/mock/mock.api';
import type { Note } from '~/notes/models/note.model';

type Props = {
  searchValue: string;
};

export const getQueryKey = ({ searchValue }: { searchValue: string }): ['notes', string] => ['notes', searchValue];

export const useGetNotes = ({ searchValue }: Props): UseQueryResult<Note[], unknown> => {
  return useQuery<Note[], unknown, Note[], ['notes', string]>({
    queryKey: getQueryKey({ searchValue }),
    queryFn: async ({ queryKey }) => {
      const searchQuery = queryKey[1];
      return getNotes({ search: searchQuery });
    },
  });
};

useGetNotes.getQueryKey = getQueryKey;
