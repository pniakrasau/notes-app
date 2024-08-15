import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';

import type { Note } from '~/notes/models/note.model';

export const testNotes: Note[] = [
  {
    text: 'Note1',
    dueDate: dayjs('2024-01-01'),
    color: '#FFA07A',
    position: -1,
    id: uuid(),
  },
  {
    text: 'Note2',
    dueDate: dayjs('2024-01-01'),
    color: '#A52A2A',
    position: 1,
    id: uuid(),
  },
];
