import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test('App loads successfully', async ({ page }) => {
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await expect(page).toHaveTitle('Brisbane Live Dashboard');
});