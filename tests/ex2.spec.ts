import {test, expect} from '@playwright/test';

const ex_to_test = "./ex2.html"
test('square_to_circle', async({page}) => {
    await page.goto(ex_to_test)
    await page.locator("button").click()
    await expect(page.locator('div')).toHaveCSS("border-radius", "50%")
})

test('square_to_circle_and_back', async({page}) => {
    await page.goto(ex_to_test)
    await page.locator("button").click()
    await expect(page.locator('div')).toHaveCSS("border-radius", "50%")
    await page.locator("button").click()
    await expect(page.locator('div')).toHaveCSS("border-radius", "0px")
})