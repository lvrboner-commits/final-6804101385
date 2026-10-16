import { test, expect } from '@playwright/test';

test('Exercise 2: Remove Product Before Checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // เพิ่มสินค้า 2 ชิ้นแรก
  await page.locator('.btn_inventory').first().click();
  await page.locator('.btn_inventory').nth(1).click();

  // ไปที่ตะกร้า
  await page.locator('.shopping_cart_link').click();
  await expect(page.locator('.cart_item')).toHaveCount(2);

  // ลบสินค้าออก 1 ชิ้น
  await page.locator('.cart_button').first().click();

  // กดปุ่ม Checkout
  await page.click('[data-test="checkout"]');

  // 👉 กรอกข้อมูลฟอร์มโดยใช้ ID (#first-name, #last-name, #postal-code)
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '10100');
  await page.click('[data-test="continue"]');

  // ตรวจสอบว่าหน้า Overview เหลือสินค้า 1 ชิ้น
  await expect(page.locator('.cart_item')).toHaveCount(1);
});