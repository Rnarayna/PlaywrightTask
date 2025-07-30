import { test, expect } from '@playwright/test';
test('standard_user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html')
    await page.locator("//input[@data-test='username']").fill('standard_user');
    await page.locator("//input[@data-test='password']").fill('secret_sauce');
    await page.locator("//input[@type='submit']").click()
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
});
