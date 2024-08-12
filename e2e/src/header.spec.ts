import { expect, test } from '@playwright/test';

test.describe('Notes Header tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Check Search Input', async ({ page }) => {
    // Check URL from ENV (need to update defaultConfig).
    expect(page.url()).toBe('http://localhost:4200/');

    const searchInputContainer = page.getByTestId('search-input');
    await expect(searchInputContainer).toBeVisible();
    const searchInput = searchInputContainer.getByPlaceholder('Seacrh note by text...');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toHaveValue('');

    await searchInput.fill('Search value');
    await expect(searchInput).toHaveValue('Search value');
  });

  test('Check CREATE NEW NOTE Button', async ({ page }) => {
    const addNewNoteButton = page.getByTestId('add-new-note-button');
    await expect(addNewNoteButton).toBeVisible();
    // eslint-disable-next-line
    console.log(addNewNoteButton.textContent());
    await expect(addNewNoteButton).toHaveText('Create new Note');
  });
});
