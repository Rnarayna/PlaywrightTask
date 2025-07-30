import { test, expect } from '@playwright/test';
test('login with valid cred', async ({ page }) => {
  // test.setTimeout(60000) 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator('[name="username"]').fill('Admin')
  await page.locator('[name="password"]').fill('admin123')
  await page.locator('[type="submit"]').click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

});
test('login with invalid username and valid password cred', async ({ page }) => {
  // test.setTimeout(60000)
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator('[name="username"]').fill('Admiin')
  await page.locator('[name="password"]').fill('admin123')
  await page.locator('[type="submit"]').click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

test('login with valid username and invalid password cred', async ({ page }) => {
  // test.setTimeout(60000)
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator('[name="username"]').fill('Admin')
  await page.locator('[name="password"]').fill('adminn123')
  await page.locator('[type="submit"]').click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

test('login with invalid username and invalid password cred', async ({ page }) => {
  // test.setTimeout(60000)
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator('[name="username"]').fill('Admiin')
  await page.locator('[name="password"]').fill('adminn123')
  await page.locator('[type="submit"]').click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});