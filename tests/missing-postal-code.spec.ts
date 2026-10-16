import { test, expect } from '@playwright/test';

test('Exercise 3: Missing Postal Code Error Validation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // เพิ่มสินค้า 1 ชิ้น
  await page.locator('.btn_inventory').first().click();

  // ไปที่หน้า Checkout
  await page.locator('.shopping_cart_link').click();
  await page.click('[data-test="checkout"]');

  // 👉 กรอกเฉพาะชื่อและนามสกุล (เว้น Postal Code ไว้ตามโจทย์)
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  // ไม่กรอก #postal-code
  await page.click('[data-test="continue"]');

  // ตรวจสอบข้อความ Error ว่าแจ้งเตือนเรื่อง Postal Code
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Postal Code');
});
