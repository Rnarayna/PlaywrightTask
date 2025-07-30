
import { test, expect } from '@playwright/test';
test('login with valid crde', async ({page}) => {
     await page.goto('https://practicetestautomation.com/practice-test-login/')
     await page.locator('[name="username"]').fill('student');
     await page.locator('[name="password"]').fill('Password123');
     await page.locator('[class="btn"]').click();
     await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
});


test('login with invalid username and valid password crde', async ({page}) => {
     await page.goto('https://practicetestautomation.com/practice-test-login/')
     await page.locator('[name="username"]').fill('studentt');
     await page.locator('[name="password"]').fill('Password123');
     await page.locator('[class="btn"]').click();
     await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
});
    
test('login with valid username and invalid password crde', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
     await page.locator('[name="username"]').fill('student');
     await page.locator('[name="password"]').fill('Password123q');
     await page.locator('[class="btn"]').click();
     await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
});

test ('login with invalid username and invalid password crde',async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
     await page.locator('[name="username"]').fill('studentt');
     await page.locator('[name="password"]').fill('Password1234');
     await page.locator('[class="btn"]').click(); 
     await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
});