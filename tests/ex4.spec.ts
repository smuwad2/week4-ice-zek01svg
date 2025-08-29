import {test, expect} from "@playwright/test"

const ex_to_test = './ex4.html'
test('ex4_add_item', async({page}) => {
    await page.goto(ex_to_test);
    await page.locator("input#inputText").fill("my_new_item1");
    await page.locator("button:text('Enter')").click();
    await expect(page.getByRole('listitem').filter({ hasText: 'my_new_item1' })).toHaveCount(1);
});

test('ex4_remove_item', async({page}) => {
    await page.goto(ex_to_test);
    await page.locator("input#inputText").fill("my_new_item1");
    await page.locator("button:text('Enter')").click();
    await page.getByRole('listitem').filter({ hasText: 'my_new_item1' }).getByRole('button').click();
    await expect(page.getByRole('listitem').filter({ hasText: 'my_new_item1' })).toHaveCount(0);
});