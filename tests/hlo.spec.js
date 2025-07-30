
import { test, expect } from '@playwright/test';
test('login with valid crde', async ({page}) => {
    await page.goto('https://bolt.playrealbrokerage.com/register')

    await page.locator('[data-testid="firstName"]').fill('anik')
    await page.locator('[data-testid="lastName"]').fill('llkl')
    await page.locator('[data-testid="username"]').fill('adh')
    await page.locator('[data-testid="emailAddress"]').fill('annn123@gmail.com')
    await page.locator('[placeholder="Select your country"]').click()
    await page.locator('//input[@placeholder="Select your country"]').click()
    //.selectOption({value:"United States"})
    await page.locator('[data-testid="password"]').fill('affddsd123@')
    await page.locator('[data-testid="confirmPassword"]').fill('affddsd123@')
    await page.locator('(//input[@type="checkbox"])[1]').check()
    await page.locator('(//input[@type="checkbox"])[2]').check()
    await page.locator('[type="submit"]').click()
})

 git config --global user.email "you@example.com"