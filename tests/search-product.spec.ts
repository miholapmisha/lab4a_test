import { test, expect } from '@playwright/test';

test('Search Product', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await expect(page).toHaveURL('https://automationexercise.com');
  await expect(page.locator('body')).toBeVisible();

  await page.click('a[href="/products"]');

  await expect(page).toHaveURL(/.*\/products/);
  await expect(page.locator('h2:has-text("All Products")')).toBeVisible();

  await page.fill('input[name="search"]', 'dress');
  await page.click('#submit_search');

  await expect(page.locator('h2:has-text("Searched Products")')).toBeVisible();

  const productResults = await page.locator('.features_items');
  await expect(productResults).toBeVisible();
  await expect(page.locator('.col-sm-4')).toHaveCount(10)
  
});
