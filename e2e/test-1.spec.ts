import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
await page.getByPlaceholder('Enter your email address').click();
await page.getByPlaceholder('Enter your email address').fill('user@nextmail.com');
await page.getByPlaceholder('Enter password').click();
await page.getByPlaceholder('Enter password').fill('123456');
await page.getByRole('button', { name: 'Log in' }).click();
await page.getByRole('link', { name: 'Invoices' }).click();
await page.getByRole('link', { name: 'Create Invoice' }).click();
await page.getByLabel('Choose customer').selectOption('cc27c14a-0acf-4f4a-a6c9-d45682c144b9');
await page.getByPlaceholder('Enter USD amount').click();
await page.getByPlaceholder('Enter USD amount').fill('123');
await page.getByLabel('Pending').check();
await page.getByRole('button', { name: 'Create Invoice' }).click();
await page.getByRole('row', { name: 'Amy Burns\'s profile picture' }).getByRole('link').click();
await page.getByLabel('Paid').check();
await page.getByRole('button', { name: 'Edit Invoice' }).click();
await page.getByRole('row', { name: 'Amy Burns\'s profile picture' }).getByRole('button').click();
await page.getByRole('link', { name: '2' }).click();
await page.getByRole('link', { name: 'Customers' }).click();
await page.getByRole('link', { name: 'Home' }).click();
await page.getByRole('button', { name: 'Sign Out' }).click();
});