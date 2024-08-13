import { Stack } from '@mui/material';
import type { ReactElement } from 'react';
import { memo, useEffect, useState } from 'react';

import { Basket } from '~/notes/components/Basket/Basket';
import { ErrorBoard } from '~/notes/components/Board/ErrorBoard';
import { useBoardDrop } from '~/notes/components/Board/hooks/useBoardDrop';
import { useGetNotes } from '~/notes/components/Board/hooks/useGetNotes';
import { useMoveCard } from '~/notes/components/Board/hooks/useMoveCard';
import { NoCards } from '~/notes/components/Board/NoCards';
import { NoteCard } from '~/notes/components/NoteCard/NoteCard';
import { NoteSkeletonLoader } from '~/notes/components/NoteCard/NoteSkeletonLoader/NoteSkeletonLoader';
import type { Note } from '~/notes/models/note.model';

type Props = {
  searchValue: string;
};

export const Board = memo(({ searchValue }: Props): ReactElement => {
  const { data, error, isFetching } = useGetNotes({ searchValue });
  const [draggedNotes, setDraggedNotes] = useState<Note[]>([]);

  useEffect(() => {
    setDraggedNotes(data || []);
  }, [data]);

  const dropRef = useBoardDrop();
  const moveCard = useMoveCard({ setDraggedNotes });

  if (error) {
    return <ErrorBoard searchValue={searchValue} />;
  }

  if (!data?.length && !isFetching) {
    return <NoCards />;
  }

  const notes = isFetching ? (
    <NoteSkeletonLoader />
  ) : (
    draggedNotes.map((note) => <NoteCard key={note.id} note={note} moveCard={moveCard} />)
  );

  return (
    <Stack flex={1} gap={4} justifyContent="space-between" mb={2}>
      <Stack flex={6} direction="row" gap={4} flexWrap="wrap" justifyContent="center" ref={dropRef}>
        {notes}
      </Stack>
      {!isFetching && <Basket searchValue={searchValue} setDraggableNotes={setDraggedNotes} />}
    </Stack>
  );
});
