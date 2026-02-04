import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
  await page.goto('http://localhost:3000/')
    await expect(page).toHaveTitle(/Brisbane Live Dashboard/);

    const mainContainer = page.locator('main');
    await expect(mainContainer).toBeVisible();

    const parkingCard = page.getByTestId('parking-card').first();
    await expect(parkingCard).toBeVisible();
    // await expect(parkingCard).toBeVisible();
})

test('checks if bcc server is slow', async({page}) => {
  await page.route("https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/brisbane-parking-stations/records?limit=20", async route => {
    await route.fulfill({
      status: 200,
      json: {
       results: [
        {
          name: "King George Square Parking",
          availableSpots: 100,
          capacity: 494,
          uploadedAt: new Date().toISOString()
      }
       ]
      }
    })
  })
})




// import { test, expect } from '@playwright/test';

// test.describe('Sprint 1: Live Parking Dashboard', () => {
  
//   test('should display vacant spaces for major parking stations', async ({ page }) => {
//     // Intercept the BCC Parking Stations API
//     await page.route('**/api/explore/v2.1/catalog/datasets/brisbane-parking-stations/**', async route => {
//       await route.fulfill({
//         status: 200,
//         contentType: 'application/json',
//         body: JSON.stringify({
//           results: [{
//             king_george_square: 150, // Mocked vacant spaces
//             wickham_terrace: 42,
//             uploaded_to_open_data_at: new Date().toISOString()
//           }]
//         })
//       });
//     });

//     await page.goto('/');

//     // Verify the UI displays the mocked numbers
//     const kgsCard = page.locator('text=King George Square');
//     await expect(kgsCard).toBeVisible();
//     await expect(page.getByText('150')).toBeVisible(); 
//   });

//   test('should show correct occupancy forecast label', async ({ page }) => {
//     // Intercept Occupancy Forecasting (0-5 scale)
//     await page.route('**/api/explore/v2.1/catalog/datasets/parking-occupancy-forecasting/**', async route => {
//       await route.fulfill({
//         json: {
//           results: [{ occupancy_pred: 1 }] // 1 = "High chance of space"
//         }
//       });
//     });

//     await page.goto('/');
    
//     // Check if your dashboard translates '1' into user-friendly text
//     await expect(page.getByText(/High Chance/i)).toBeVisible();
//   });
// });