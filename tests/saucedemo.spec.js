import { test, expect } from '@playwright/test';
const { chromium} = require("@playwright/test")
// alwyas add a test bloc and import { test, expect } from '@playwright/test';


test('Record Saucedemo', async () => {
  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('a').filter({ hasText: '3' }).click();
  await page.getByText('Continue ShoppingCheckout').click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  await page.locator('a').filter({ hasText: '6' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('oussama');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('belack');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('60000');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('div').filter({ hasText: /^Swag Labs$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Swag Labs$/ }).first().click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  await context.close();
  await browser.close();
});
