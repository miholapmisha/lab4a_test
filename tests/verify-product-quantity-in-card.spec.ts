import { test, expect } from '@playwright/test';

test('Verify Product quantity in Cart', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await expect(page).toHaveURL('https://automationexercise.com');
  await expect(page.locator('body')).toBeVisible();

  const firstProductViewLink = await page.locator('.features_items .col-sm-4 ul a').first();
  await firstProductViewLink.click();

  await expect(page).toHaveURL(/\/product_details\//);
  await expect(page.locator('.product-information')).toBeVisible();

  const quantityInput = await page.locator('input[name="quantity"]');
  await quantityInput.fill('4');

  await page.click('button.cart');

  await page.click('.modal-content a[href="/view_cart"]');

  const cartQuantity = await page.locator('.cart_quantity button').textContent();
  await expect(page).toHaveURL('https://automationexercise.com/view_cart');
  await expect(cartQuantity).toBe('4');
  
});
