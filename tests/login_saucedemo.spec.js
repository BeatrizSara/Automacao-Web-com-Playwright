import { test, expect } from '@playwright/test';

test('Login com usuário válido', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Validação se o login deu certo
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});