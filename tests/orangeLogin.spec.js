import { test, expect } from '@playwright/test';
test('login with valid cred', async ({ page }) => {
  // test.setTimeout(60000) 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator('[name="username"]').fill('Admin')
  await page.locator('[name="password"]').fill('admin123')
  await page.locator('[type="submit"]').click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

});