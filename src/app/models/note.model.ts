import type { Dayjs } from 'dayjs';

export const NoteColorsVariants = {
  SteelBlue: '#4682B4',
  SandyBrown: '#F4A460',
  Brown: '#A52A2A',
  DarkGrey: '#A9A9A9',
  Plum: '#DDA0DD',
  DarkKhaki: '#BDB76B',
  LightSalmon: '#FFA07A',
} as const;

export type NoteColors = typeof NoteColorsVariants;
export type NoteColorName = keyof NoteColors;
export type NoteColor = NoteColors[NoteColorName];

export type Note = {
  id: string;
  text: string;
  color: NoteColor;
  position: number;
  dueDate: Dayjs | undefined;
};

export type NoteColorsResponse = {
  data: NoteColors;
};
