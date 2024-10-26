import { test, expect } from '@playwright/test';

test('Login User with incorrect email and password', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  await expect(page).toHaveURL('https://automationexercise.com');
  await expect(page.locator('body')).toBeVisible();

  await page.click('a[href="/login"]');

  await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

  await page.fill('input[name="email"]', 'incorrect@example.com');
  await page.fill('input[name="password"]', 'wrongpassword');

  await page.click('button:has-text("Login")');

  await expect(page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible();
});
