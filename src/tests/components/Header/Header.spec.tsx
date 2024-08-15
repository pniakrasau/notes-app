import { fireEvent, render } from '@testing-library/react';

import { Header } from '~/notes/components/Header/Header';

const addNewNoteButtonId = 'add-new-note-button';
const headerContainerId = 'header-container';
const searchInputId = 'search-input';

jest.mock('~/notes/components/AddNewNoteButton/AddNewNoteButton', () => ({
  AddNewNoteButton: jest.fn(({ 'data-testid': testId, children }) => <div data-testid={testId}>{children}</div>),
}));

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (key: string) => key,
  }),
}));

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  TextField: jest.fn(({ placeholder, 'data-testid': testId, onChange }) => (
    <input data-testid={testId} placeholder={placeholder} onChange={onChange} />
  )),
}));

describe('Header', () => {
  it('Should render successfully', () => {
    // given
    const searchValue = '';
    const setSearchValue = jest.fn();
    const placeholder = 'notes:fields.searchInputPlaceholder';

    // when
    const { getByTestId } = render(<Header searchValue={searchValue} setSearchValue={setSearchValue} />);

    const headerContainer = getByTestId(headerContainerId);
    const addNewNoteButton = getByTestId(addNewNoteButtonId);
    const searchInput = getByTestId(searchInputId);

    // then
    expect(headerContainer).toBeInTheDocument();
    expect(addNewNoteButton).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('placeholder', placeholder);
  });

  it('Should run handleChange when typing', () => {
    // given
    const searchValue = '';
    const setSearchValue = jest.fn();

    // when
    const { getByTestId } = render(<Header searchValue={searchValue} setSearchValue={setSearchValue} />);

    const searchInput = getByTestId(searchInputId);

    // then
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: 'input' } });
    expect(setSearchValue).toHaveBeenCalledTimes(1);
  });
});
