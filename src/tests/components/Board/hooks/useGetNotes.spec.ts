import { renderHook } from '@testing-library/react';

import { useGetNotes } from '~/notes/components/Board/hooks/useGetNotes';

import { testNotes } from '../../../test-data.mock';

const getNotesMock = jest.fn();
jest.mock('~/notes/mock/mock.api', () => ({
  getNotes: () => getNotesMock(),
}));

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(({ queryFn }) => {
    // Call the provided queryFn
    try {
      // Attempt to execute the query function
      queryFn();

      return {
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: testNotes,
        error: undefined,
        refetch: jest.fn(),
      };
    } catch (error) {
      return {
        isLoading: false,
        isError: true,
        isSuccess: false,
        data: undefined,
        error,
        refetch: jest.fn(),
      };
    }
  }),
  useQueryClient: jest.fn(),
}));

describe('useGetNotes', () => {
  beforeAll(() => {});

  it('Should return notes from API', () => {
    // given
    const searchValue = '';
    getNotesMock.mockReturnValue(testNotes);

    // when
    const { result } = renderHook(() => useGetNotes({ searchValue }));

    expect(result.current.data).toEqual(testNotes);
  });
});
