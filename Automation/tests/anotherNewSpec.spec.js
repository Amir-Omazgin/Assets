
const { test, request } = require('@playwright/test')



test( 'visit', async  ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://review2.qualilabs.net/")
    await page.locator("[data-test='login-with-email']").click()
    await page.locator('[type="email"]').type(process.env.USERNAME)
    await page.locator('[type="password"]').type(process.env.PASSWORD)
    await page.locator('[type="submit"]').click()
    await page.locator('[type="submit"]').click()
    await page.locator('[data-test="sidebar-dropdown"]').click()
    const space = page.locator('.select-space__group ')
    await (space.getByText('Amir')).click()
    const general =  page.locator('.scrollable-container')
    await (general.getByText('Environments')).click()

})




