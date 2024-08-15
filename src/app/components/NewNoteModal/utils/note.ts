import { v4 as uuid } from 'uuid';

import type { Note } from '~/notes/models/note.model';

export const rotateRandom = () => Math.random() * 4 - 2;

export const creteNote = (note: Note) => ({
  ...note,
  id: uuid(),
  position: rotateRandom(),
});
