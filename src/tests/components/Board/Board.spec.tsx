import { render } from '@testing-library/react';

import { Board } from '~/notes/components/Board';

import { testNotes } from '../../test-data.mock';

const errorBoardId = 'add-new-note-button';
const noCardsId = 'header-container';
const basketId = 'search-input';
const noteCardId = 'note-card-id';
const noteSkeletonLoaderId = 'note-skeleton-loader-id';

jest.mock('~/notes/components/Basket', () => ({
  Basket: jest.fn(() => <div data-testid={basketId} />),
}));

jest.mock('~/notes/components/Board/components', () => ({
  ErrorBoard: jest.fn(() => <div data-testid={errorBoardId} />),
  NoCards: jest.fn(() => <div data-testid={noCardsId} />),
}));

const useGetNotesMock = jest.fn();

jest.mock('~/notes/components/Board/hooks', () => ({
  useBoardDrop: jest.fn(),
  useGetNotes: () => useGetNotesMock(),
  useMoveCard: jest.fn(),
}));

jest.mock('~/notes/components/NoteCard', () => ({
  NoteCard: jest.fn(() => <div data-testid={noteCardId} />),
  NoteSkeletonLoader: jest.fn(() => <div data-testid={noteSkeletonLoaderId} />),
}));

describe('Board', () => {
  beforeAll(() => {});

  it('Should render ErrorBoard in case of error', () => {
    // given
    const searchValue = '';
    useGetNotesMock.mockReturnValue({ error: 'Error', data: [], isFetching: false });

    // when
    const { getByTestId, queryByTestId } = render(<Board searchValue={searchValue} />);

    const errorBoard = getByTestId(errorBoardId);
    const noCards = queryByTestId(noCardsId);
    const basket = queryByTestId(basketId);
    const noteCards = queryByTestId(noteCardId);
    const noteSkeletonLoader = queryByTestId(noteSkeletonLoaderId);

    // then
    expect(errorBoard).toBeInTheDocument();
    expect(noCards).not.toBeInTheDocument();
    expect(basket).not.toBeInTheDocument();
    expect(noteCards).not.toBeInTheDocument();
    expect(noteSkeletonLoader).not.toBeInTheDocument();
  });

  it('Should show SkeletonLoader when loading', () => {
    // given
    const searchValue = '';
    useGetNotesMock.mockReturnValue({ data: [], isFetching: true });

    // when
    const { getByTestId, queryByTestId } = render(<Board searchValue={searchValue} />);

    const errorBoard = queryByTestId(errorBoardId);
    const noCards = queryByTestId(noCardsId);
    const basket = queryByTestId(basketId);
    const noteCards = queryByTestId(noteCardId);
    const noteSkeletonLoader = getByTestId(noteSkeletonLoaderId);

    // then
    expect(noteSkeletonLoader).toBeInTheDocument();
    expect(errorBoard).not.toBeInTheDocument();
    expect(noCards).not.toBeInTheDocument();
    expect(basket).not.toBeInTheDocument();
    expect(noteCards).not.toBeInTheDocument();
  });

  it('Display the "No cards" screen when there are no cards to show.', () => {
    // given
    const searchValue = '';
    useGetNotesMock.mockReturnValue({ data: [], isFetching: false });

    // when
    const { getByTestId, queryByTestId } = render(<Board searchValue={searchValue} />);

    const errorBoard = queryByTestId(errorBoardId);
    const noCards = getByTestId(noCardsId);
    const basket = queryByTestId(basketId);
    const noteCards = queryByTestId(noteCardId);
    const noteSkeletonLoader = queryByTestId(noteSkeletonLoaderId);

    // then
    expect(noCards).toBeInTheDocument();
    expect(noteCards).not.toBeInTheDocument();
    expect(noteSkeletonLoader).not.toBeInTheDocument();
    expect(errorBoard).not.toBeInTheDocument();
    expect(basket).not.toBeInTheDocument();
  });

  it('Display cards and basket in case of success.', () => {
    // given
    const searchValue = '';
    useGetNotesMock.mockReturnValue({ data: testNotes, isFetching: false });

    // when
    const { getAllByTestId, queryByTestId } = render(<Board searchValue={searchValue} />);

    const errorBoard = queryByTestId(errorBoardId);
    const noCards = queryByTestId(noCardsId);
    const basket = queryByTestId(basketId);
    const noteCards = getAllByTestId(noteCardId);
    const noteSkeletonLoader = queryByTestId(noteSkeletonLoaderId);

    // then
    expect(noCards).not.toBeInTheDocument();
    expect(noteSkeletonLoader).not.toBeInTheDocument();
    expect(errorBoard).not.toBeInTheDocument();
    expect(basket).toBeInTheDocument();
    expect(noteCards).toHaveLength(2);
  });
});
