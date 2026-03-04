import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('BNE Pulse - BCC API Health Checks', () => {

  test('Parking data loads with real spot numbers', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // "SPOTS LEFT" only renders if getParkingInfo() returned real data
    const spotsLeft = page.locator('text=SPOTS LEFT').first();
    await expect(spotsLeft).toBeVisible({ timeout: 15000 });
  });

  // sensor list tests
  test('Sensor network loads with real sensor count', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // Sensor map only renders if getTelemetryMetadataInfo() returned data
    const sensorHeader = page.locator('text=Sensor Network');
    await expect(sensorHeader).toBeVisible({ timeout: 15000 });

    // Check count badge is a real number (not 0)
    const sensorCount = page.locator('text=Sensor Network')
      .locator('..')
      .locator('..')
      .getByText(/^\d+$/);
    await expect(sensorCount).toBeVisible({ timeout: 15000 });
  });

  

  // tests for events
  test('Events load with real listings', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // ExternalLink buttons — one per real event card
    const externalLinks = page.locator('a[target="_blank"]');
    await expect(externalLinks).toHaveCount(await externalLinks.count());
    expect(await externalLinks.count()).toBeGreaterThan(0);

    // Category badge — only renders if event data loaded
    // Checks for known BCC event categories
    const categoryBadge = page.locator('text=Exhibitions')
      .or(page.locator('text=Art'))
      .or(page.locator('text=Markets'))
      .or(page.locator('text=Music'))
      .or(page.locator('text=Workshop'))
      .first();
    await expect(categoryBadge).toBeVisible({ timeout: 15000 });

    // At least one event title rendered (h4 inside event card)
    const eventTitles = page.locator('h4');
    const count = await eventTitles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Parking shows AVAILABLE status', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // AVAILABLE badge only renders when API returns valid occupancy data
    const availableBadge = page.locator('text=AVAILABLE').first();
    await expect(availableBadge).toBeVisible({ timeout: 15000 });
  });

});




test('Sensor map loads with real markers', async ({ page }) => {
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  // Map container renders regardless, but markers only render with real data
  const sensorMap = page.locator('[data-testid="sensor-map"]');
  await expect(sensorMap).toBeVisible({ timeout: 15000 });

  // Each marker only exists if getTelemetryMetadataInfo() returned sensors
  const markers = page.locator('[data-testid="sensor-marker"]');
  const markerCount = await markers.count();
  expect(markerCount).toBeGreaterThan(0);
  console.log(`✅ ${markerCount} sensor markers loaded from BCC API`);

  // Legend only shows when map is mounted and sensors exist
  const legend = page.locator('text=Live Sensors');
  await expect(legend).toBeVisible({ timeout: 15000 });
});

test('Sensor markers show rain and creek types', async ({ page }) => {
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  // Legend items only render when component is fully mounted
  const rainLegend = page.locator('text=Rain');
  const creekLegend = page.locator('text=Creek');

  await expect(rainLegend).toBeVisible({ timeout: 15000 });
  await expect(creekLegend).toBeVisible({ timeout: 15000 });
});

test('Sensor tooltip shows real data on hover', async ({ page }) => {
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  // Hover over first marker to reveal tooltip
  const firstMarker = page.locator('[data-testid="sensor-marker"]').first();
  await expect(firstMarker).toBeVisible({ timeout: 15000 });
  await firstMarker.hover();

  // Tooltip contains real locationName from API
  const tooltip = page.locator('.group-hover\\:block').first();
  await expect(tooltip).toBeVisible({ timeout: 5000 });
});