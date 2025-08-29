import { test, expect } from "@playwright/test";

const ex_to_test = './ex6.html';

test('ex6 - add item to list', async ({ page }) => {
    await page.goto(ex_to_test);
    const listItems = await page.locator("ul#shopList li");
    await expect(listItems).toHaveCount(0);
    await page.locator("#select_item").selectOption({ value: 'Spinach' });
    await expect(page.getByRole('listitem').filter({ hasText: 'Spinach' })).toHaveCount(1);
});

test('ex6 - add multiple items to list', async ({ page }) => {
    await page.goto(ex_to_test);
    const listItems = await page.locator("ul#shopList li");
    await expect(listItems).toHaveCount(0);
    await page.locator("#select_item").selectOption({ value: 'Spinach' });
    await page.locator("#select_item").selectOption({ value: 'Rice' });
    await page.locator("#select_item").selectOption({ value: 'Candles' });
    await expect(page.getByRole('listitem').filter({ hasText: 'Spinach' })).toHaveCount(1);
    await expect(page.getByRole('listitem').filter({ hasText: 'Rice' })).toHaveCount(1);
    await expect(page.getByRole('listitem').filter({ hasText: 'Candles' })).toHaveCount(1);
});
