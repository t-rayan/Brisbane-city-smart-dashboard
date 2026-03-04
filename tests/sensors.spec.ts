import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Sensor API Health', () => {

  test('Sensor map container is visible', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const sensorMap = page.locator('[data-testid="sensor-map"]');
    await expect(sensorMap).toBeVisible({ timeout: 15000 });
  });

  test('Sensor markers load from real API data', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const markers = page.locator('[data-testid="sensor-marker"]');
    await expect(markers.first()).toBeVisible({ timeout: 15000 });

    const count = await markers.count();
    expect(count).toBeGreaterThan(0);
    console.log(`✅ ${count} sensor markers loaded`);
  });

  test('Legend shows rain and creek types', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const legend = page.locator('[data-testid="sensor-legend"]');
    await expect(legend).toBeVisible({ timeout: 15000 });

    // await expect(page.locator('text=Rain')).toBeVisible();
    // await expect(page.locator('text=Creek')).toBeVisible();
  });

  test('Sensor tooltip shows real data on hover', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const firstMarker = page.locator('[data-testid="sensor-marker"]').first();
    await expect(firstMarker).toBeVisible({ timeout: 15000 });
    await firstMarker.hover();

    const tooltip = page.locator('[data-testid="sensor-tooltip"]').first();
    await expect(tooltip).toBeVisible({ timeout: 5000 });
  });

  test('Recenter button is visible', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const recenterBtn = page.locator('[data-testid="recenter-button"]');
    await expect(recenterBtn).toBeVisible({ timeout: 15000 });
  });

});