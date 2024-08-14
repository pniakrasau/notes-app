import type { Note, NoteColorsResponse } from '~/notes/models/note.model';
import { NoteColorsVariants } from '~/notes/models/note.model';

/**
 * Fake API
 *
 * These functions simulate interaction with a mock notes API.
 *
 * Functions:
 * - getNotes: Filters notes based on a search string and returns a Promise with the filtered notes.
 * - addNote: Adds a new note to the list of notes and returns a Promise with the added note.
 * - removeNote: Removes a note from the list of notes and returns a Promise with the removed note.
 * - getNoteColors: Returns a Promise with data about note colors.
 *
 * Notes:
 * - Delays introduced using setTimeout simulate asynchronous API calls.
 * - Errors are randomly generated to simulate potential API failures.
 */

let notes: Note[] = [];

type GetNotesProps = {
  search: string;
};

export const getNotes = ({ search }: GetNotesProps): Promise<Note[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.9) {
        reject(new Error('cannotGetNote'));
        return;
      }

      resolve(notes.filter((note) => note.text.toLowerCase().includes(search.toLowerCase())));
    }, 1000);
  });

export type AddNoteProps = {
  note: Note;
};

export type RemoveNoteProps = AddNoteProps;

export const addNote = ({ note }: AddNoteProps): Promise<Note> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // show error randomly
      if (Math.random() > 0.9) {
        reject(new Error('cannotAddNote'));
        return;
      }

      notes.push(note);
      resolve(note);
    }, 1000);
  });

export const removeNote = ({ note }: AddNoteProps): Promise<Note> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.9) {
        reject(new Error('cannotDeleteNote'));
        return;
      }

      const index = notes.findIndex((storedNote) => storedNote.id === note.id);
      notes.splice(index, 1);

      resolve(note);
    }, 1000);
  });

export type ReorderNoteProps = {
  dragIndex: string;
  hoverIndex: string;
};

// Optimistic update
export const reorderNotes = ({ dragIndex, hoverIndex }: ReorderNoteProps): Promise<Note[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.9) {
        reject(new Error('cannotReorderNotes'));
        return;
      }

      notes = notes.map((note) => {
        if (note.id === dragIndex) {
          return notes.find((hoverNote) => hoverNote.id === hoverIndex)!;
        }

        if (note.id === hoverIndex) {
          return notes.find((dragNote) => dragNote.id === dragIndex)!;
        }

        return note;
      });

      resolve(notes);
    }, 500);
  });

export const getNoteColors = (): Promise<NoteColorsResponse> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: NoteColorsVariants });
    }, 500);
  });
