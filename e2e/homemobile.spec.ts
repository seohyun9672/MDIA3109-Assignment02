import { test, devices, expect } from "@playwright/test";

test.use({
  browserName: "chromium",
  ...devices['iPhone XR']
})

test.describe("The mobile viewport for iPhone XR", () => {
  test('Testing for the gap between recipes cards on iPhone XR', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const cardContainer = page.locator('#popular');

    const checkingFlexGap = await cardContainer.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("gap")
    })
    
    console.log(checkingFlexGap);
    expect(checkingFlexGap).toBe("30px");
  })
})

test.describe("The mobile viewport for iPhone XR", () => {
  test('Testing for scroll bar between categories on iPhone XR', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const cardContainer = page.locator('#scollbar');

    const checkingScrollbar = await cardContainer.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("overflow-x")
    })
    
    console.log(checkingScrollbar);
    expect(checkingScrollbar).toBe("scroll");
  })
})
