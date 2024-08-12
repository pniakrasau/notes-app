import { render } from '@testing-library/react';

import { App } from './App';

const boardTestId = 'board';
const headerTestId = 'header';
const dndProviderTestId = 'dnd-provider';

jest.mock('~/notes/components/Board/Board', () => ({
  Board: jest.fn(({ 'data-testid': testId, children }) => <div data-testid={testId}>{children}</div>),
}));

jest.mock('~/notes/components/Header/Header', () => ({
  Header: jest.fn(({ 'data-testid': testId }) => <div data-testid={testId} />),
}));

jest.mock('~/notes/hooks/useDebouncedValue', () => ({
  useDebouncedValue: jest.fn().mockReturnValue(''),
}));

jest.mock('~/notes/providers/DnDProviderSetup', () => ({
  DnDProviderSetup: jest.fn(({ 'data-testid': testId, children }) => <div data-testid={testId}>{children}</div>),
}));

describe('App', () => {
  it('Should render successfully', () => {
    // given
    // when
    const { getByTestId } = render(<App />);

    const board = getByTestId(boardTestId);
    const header = getByTestId(headerTestId);
    const dndProvider = getByTestId(dndProviderTestId);

    // then
    expect(board).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(dndProvider).toBeInTheDocument();
  });
});
