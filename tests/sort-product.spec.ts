import { test, expect } from '@playwright/test';

test('Exercise 1: Sort Product (Price Low to High)', async ({ page }) => {
  // 1. Login
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // 2. Inventory
  await expect(page).toHaveURL(/.*inventory.html/);

  // 3. Select Price Low to High
  await page.locator('.product_sort_container').selectOption('lohi');

  // 4. Verify prices are ascending
  const prices = await page.locator('.inventory_item_price').allInnerTexts();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  
  for (let i = 0; i < numericPrices.length - 1; i++) {
    expect(numericPrices[i]).toBeLessThanOrEqual(numericPrices[i + 1]);
  }
});