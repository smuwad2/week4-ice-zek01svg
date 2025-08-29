import { test, expect } from '@playwright/test';

const ex_to_test = "./ex1.html"
const age_err_msg = "Age must be between 10 and 40."
const email_err_msg = "Email must contain the character @."
const password_err_msg = "Password must be non-empty."
const wait_delay = 2000;
test('invalid_age_only', async ({ page }) => {
  await page.goto(ex_to_test);
  // const dialogPromise = page.waitForEvent('dialog');

  await page.locator('input[name="age"]').fill('9');
  await page.locator('input[name="email"]').fill('a@b');
  await page.locator('input[name="password"]').fill('abc');
  let showDialog=false
  page.once('dialog', async (dialog) => {
    showDialog = true;
    expect(dialog.type()).toBe('alert');
    expect(dialog.message().trim()).toBe(age_err_msg);
    await dialog.accept();
  });

  await page.locator('input[type="submit"]').click();
  await page.waitForTimeout(wait_delay);
  expect(showDialog).toBe(true);
});


test('invalid_email_only', async ({ page }) => {
  await page.goto(ex_to_test);

  await page.locator('input[name="age"]').fill('19');
  await page.locator('input[name="email"]').fill('ab');
  await page.locator('input[name="password"]').fill('abc');
  let showDialog=false;
  page.once('dialog', async (dialog) => {
    showDialog = true;
    expect(dialog.type()).toBe('alert');
    expect(dialog.message().trim()).toBe(email_err_msg);
    await dialog.accept();
  });

  await page.locator('input[type="submit"]').click();
  await page.waitForTimeout(wait_delay);
  expect(showDialog).toBe(true);
});


test('invalid_password_only', async ({ page }) => {
  await page.goto(ex_to_test);
  // const dialogPromise = page.waitForEvent('dialog');

  await page.locator('input[name="age"]').fill('19');
  await page.locator('input[name="email"]').fill('a@b');
  await page.locator('input[name="password"]').fill('');
  let showDialog = false;
  page.once('dialog', async (dialog) => {
    showDialog = true;
    expect(dialog.type()).toBe('alert');
    expect(dialog.message().trim()).toBe(password_err_msg);
    await dialog.accept();
  });

  await page.locator('input[type="submit"]').click();
  await page.waitForTimeout(wait_delay);
  expect(showDialog).toBe(true);
});

test('invalid_age_email_only', async ({ page }) => {
  await page.goto(ex_to_test);
  // const dialogPromise = page.waitForEvent('dialog');

  await page.locator('input[name="age"]').fill('9');
  await page.locator('input[name="email"]').fill('ab');
  await page.locator('input[name="password"]').fill('abc');
  let showDialog = false;
  page.once('dialog', async (dialog) => {
    showDialog = true;
    expect(dialog.type()).toBe('alert');
    expect(dialog.message().trim()).toContain(age_err_msg);
    expect(dialog.message().trim()).toContain(email_err_msg);
    await dialog.accept();
  });

  await page.locator('input[type="submit"]').click();
  await page.waitForTimeout(wait_delay);
  expect(showDialog).toBe(true);
});

test('invalid_age_email_empty_password', async ({ page }) => {
  await page.goto(ex_to_test);
  // const dialogPromise = page.waitForEvent('dialog');

  await page.locator('input[name="age"]').fill('1');
  await page.locator('input[name="email"]').fill('ab');
  await page.locator('input[name="password"]').fill('');
  let showDialog = false;
  page.once('dialog', async (dialog) => {
    showDialog = true;
    expect(dialog.type()).toBe('alert');
    expect(dialog.message().trim()).toContain(age_err_msg);
    expect(dialog.message().trim()).toContain(email_err_msg);
    expect(dialog.message().trim()).toContain(password_err_msg);
    await dialog.accept();
  });

  await page.locator('input[type="submit"]').click();
  await page.waitForTimeout(wait_delay);
  expect(showDialog).toBe(true);
});

