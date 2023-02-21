import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";

test.beforeAll(async () => {
  console.log('Before tests');
});

test.afterAll(async () => {
  console.log('After tests');
});

test.describe('Main area', () => {
  test('Checking to see if headings are in the main area', async ({ page }) => {
    await page.goto(urlHome)
    await expect(page.locator('h1')).toHaveCount(1);
  })

  test('Header Tag', async({ page }) => { 
    await page.goto(urlHome)

    await expect(page.locator('h1')).toContainText('What would you wish to cook?');
  })
})
