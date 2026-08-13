const { test, expect } = require('@playwright/test');

test('homepage loads successfully', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example Domain/);
  await expect(page.locator('h1')).toHaveText(/Example Domain/);
  await page.waitForTimeout(5000)
});
