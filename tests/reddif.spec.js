import { expect,test} from "@playwright/test";
import data from '../testdata/reddif.json'
test("Creating the reddif Acc",async({page})=>{
    await page.goto('/register/register.php?FormName=user_details') 
    await page.locator('[placeholder="Enter your full name"]').fill(data.full_name)
    await page.locator('[placeholder="Enter Rediffmail ID"]').fill(data.reddif_id)
    await page.locator('[id="newpasswd"]').fill(data.newpasswd)
    await page.locator('[id="newpasswd1"]').fill(data.newpasswd)
    await page.locator('[class="middle month"]').selectOption(data.month)
    await page.locator('[class="year"]').selectOption(data.year)
    //await/ page.locator('select[name^="DOB_Day"]').selectOption("08")
    await page.locator('[class="day"]').selectOption(data.day)
    await page.locator('[id="country"]').selectOption(data.country)
//    await page.locator('[placeholder="Enter recovery email"]').click
    await page.locator('[type="checkbox"]').click()
    await page.locator('[id="altid_msg"]').click
    await page.locator('[id="mobno"]').fill(data.mobno)
    await page.waitForTimeout(3000)

});
