import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Events API Health', () => {

    // check if events section renders at all 
  test('Events section is visible', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const eventsSection = page.locator("text=What's On");
    await expect(eventsSection).toBeVisible({ timeout: 15000 });
  });


  test('Event cards load from real API data', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const eventCards = page.locator('[data-testid="event-card"]');
    await expect(eventCards.first()).toBeVisible({ timeout: 15000 });

    const count = await eventCards.count();
    expect(count).toBeGreaterThan(0);
    console.log(`✅ ${count} events loaded`);
  });

  test('Event cards show real category badges', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const categoryBadge = page.locator('text=Exhibitions')
      .or(page.locator('text=Art'))
      .or(page.locator('text=Markets'))
      .or(page.locator('text=Music'))
      .or(page.locator('text=Workshop'))
      .first();

    await expect(categoryBadge).toBeVisible({ timeout: 15000 });
  });

  test('Event cards have working external links', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    const externalLinks = page.locator('[data-testid="event-card"] a[target="_blank"]');
    await expect(externalLinks.first()).toBeVisible({ timeout: 15000 });

    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);
  });

});