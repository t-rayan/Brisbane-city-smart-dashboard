import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Parking API Health', () => {

  test('Parking section is visible', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const parkingSection = page.locator('text=City Parking');
    await expect(parkingSection).toBeVisible({ timeout: 15000 });
  });

  test('Parking loads real spot numbers', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const spotsLeft = page.locator('text=SPOTS LEFT').first();
    await expect(spotsLeft).toBeVisible({ timeout: 15000 });
  });

  test('Parking shows AVAILABLE status', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const availableBadge = page.locator('text=AVAILABLE').first();
    await expect(availableBadge).toBeVisible({ timeout: 15000 });
  });

});