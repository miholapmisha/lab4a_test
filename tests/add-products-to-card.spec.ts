import { test, expect } from '@playwright/test';

test('Add Products in Cart', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await expect(page).toHaveURL('https://automationexercise.com');
  await expect(page.locator('body')).toBeVisible();

  await page.click('a[href="/products"]');

  const firstProduct = page.locator('.features_items .col-sm-4 .productinfo').first();
  await firstProduct.hover();
  await firstProduct.locator('a.add-to-cart').click();

  await page.click('button.close-modal');

  const secondProduct = page.locator('.features_items .col-sm-4 .productinfo').nth(1);
  await secondProduct.hover();
  await secondProduct.locator('a.add-to-cart').click();

  await page.click('a[href="/view_cart"]');

  const cartItems = page.locator('.cart_info .cart_product');
  await expect(cartItems).toHaveCount(2);

  const productPrices = await page.locator('.cart_info .cart_price').allTextContents();
  const productQuantities = await page.locator('.cart_info .cart_quantity button').allTextContents();
  const productTotals = await page.locator('.cart_info .cart_total').allTextContents();

  const price1 = parseFloat(productPrices[0].replace('Rs. ', '').trim());
  const price2 = parseFloat(productPrices[1].replace('Rs. ', '').trim());
  const quantity1 = parseInt(productQuantities[0], 10);
  const quantity2 = parseInt(productQuantities[1], 10);
  const total1 = parseFloat(productTotals[0].replace('Rs. ', '').trim());
  const total2 = parseFloat(productTotals[1].replace('Rs. ', '').trim());

  expect(total1).toBe(price1 * quantity1);
  expect(total2).toBe(price2 * quantity2);
});
