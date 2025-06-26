import { test, expect } from '@playwright/test';

test('WelcomePinterest', async ({ page }) => {
  await page.goto('https://br.pinterest.com/');
  await expect(page.getByRole('heading', { name: 'Welcome to Pinterest' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome to Pinterest' })).toBeVisible();
  await expect(page.locator('[data-test-id="login-modal-default"]').getByRole('heading')).toContainText('Welcome to Pinterest');
});

test('email', async ({ page }) => {
  await page.goto('https://br.pinterest.com/');
  await page.locator('[data-test-id="emailInputField"]').click();
  await page.locator('[data-test-id="emailInputField"]').fill('bealthysantoss@gmail.com');
  await page.locator('[data-test-id="emailInputField"]').click();
  await expect(page.locator('[data-test-id="emailInputField"]')).toBeVisible();
});