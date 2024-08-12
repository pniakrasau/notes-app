import { expect, test } from '@playwright/test';

test.describe('Notes Board tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Check Empty Board', async ({ page }) => {
    // Check URL from ENV (need to update defaultConfig).
    expect(page.url()).toBe('http://localhost:4200/');

    const boardContainer = page.getByTestId('board-container');
    await expect(boardContainer).toBeVisible();
    const notCardsText = boardContainer.getByTestId('no-cards-text');
    await expect(notCardsText).toHaveText('No note cards available.');
  });
});
