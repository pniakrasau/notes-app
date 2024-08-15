import { render } from '@testing-library/react';

import { NoCards } from '~/notes/components/Board/components/NoCards';

const noCardsTextId = 'no-cards-text';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (key: string) => key,
  }),
}));

describe('NoCards', () => {
  it('Should render NoCards', () => {
    // given
    // when
    const { getByTestId } = render(<NoCards />);

    const noCardsText = getByTestId(noCardsTextId);

    // then
    expect(noCardsText).toBeInTheDocument();
    expect(noCardsText).toHaveTextContent('notes:common:noCardsText');
  });
});
