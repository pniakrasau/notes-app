import { fireEvent, render } from '@testing-library/react';

import { ErrorBoard } from '~/notes/components/Board/components/ErrorBoard';

const errorBoardContainerId = 'error-board-container';
const errorBoardTitleId = 'error-board-title';
const errorBoardButtonId = 'error-board-button';

const invalidateQueriesMock = jest.fn();

jest.mock('@tanstack/react-query', () => ({
  useQueryClient: jest.fn(() => ({
    invalidateQueries: () => invalidateQueriesMock(),
  })),
}));

jest.mock('~/notes/components/Board/hooks/index', () => ({
  useGetNotes: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (key: string) => key,
  }),
}));

describe('ErrorBoard', () => {
  it('Should render ErrorBoard', () => {
    // given
    const searchValue = '';

    // when
    const { getByTestId } = render(<ErrorBoard searchValue={searchValue} />);

    const errorBoardContainer = getByTestId(errorBoardContainerId);
    const errorBoardTitle = getByTestId(errorBoardTitleId);
    const errorBoardButton = getByTestId(errorBoardButtonId);

    // then
    expect(errorBoardContainer).toBeInTheDocument();
    expect(errorBoardTitle).toBeInTheDocument();
    expect(errorBoardTitle).toHaveTextContent('notes:errors.common');
    expect(errorBoardButton).toBeInTheDocument();
  });

  it('Should invalidate useGetNotes query when click refresh button', () => {
    // given
    const searchValue = '';

    // when
    const { getByTestId } = render(<ErrorBoard searchValue={searchValue} />);
    const errorBoardButton = getByTestId(errorBoardButtonId);

    fireEvent.click(errorBoardButton);

    // then
    expect(errorBoardButton).toBeInTheDocument();
    expect(invalidateQueriesMock).toHaveBeenCalledTimes(1);
  });
});
