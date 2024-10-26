import { test, expect } from '@playwright/test';

test('View Category Products', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  const categoriesSidebar = page.locator('.left-sidebar .category-products');
  await expect(categoriesSidebar).toBeVisible();

  const womenCategory = categoriesSidebar.locator('a[href="#Women"]');
  await womenCategory.click();

  const dressCategory = categoriesSidebar.locator('a', {hasText: 'Dress'}).first();
  await dressCategory.click();

  const categoryTitle = page.locator('.title');
  await expect(categoryTitle).toBeVisible();
  await expect(categoryTitle).toHaveText('Women -  Dress Products');

  const menCategoryLink = categoriesSidebar.locator('a[href="#Men"]');
  await menCategoryLink.click();

  const tshirtsSubCategory = categoriesSidebar.locator('a', {hasText: 'Tshirts'}).first();
  await tshirtsSubCategory.click();

  const menCategoryTitle = page.locator('.title');
  await expect(menCategoryTitle).toBeVisible();
  await expect(menCategoryTitle).toHaveText('Men - Tshirts Products');
  
});
