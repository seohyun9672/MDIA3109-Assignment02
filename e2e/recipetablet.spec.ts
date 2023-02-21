import { test, devices, expect } from "@playwright/test";

test.use({
  browserName: "chromium",
  ...devices["iPad Air"],
  viewport: { width: 820, height: 1180 },
});

test.describe("The mobile viewport for iPad Air", () => {
  test("Testing for the font size of the item on iPad Air", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/recipes");

    const header = page.locator("#header");

    const checkingHeaderTextAlign = await header.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("text-align");
    });

    console.log(checkingHeaderTextAlign);
    expect(checkingHeaderTextAlign).toBe("center");
  });

  test("Testing for margin of the main area on iPad Air", async ({ page }) => {
    await page.goto("http://localhost:3000/recipes");

    const mainContainer = page.locator("#main");

    const checkingMargin = await mainContainer.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("margin");
    });

    console.log(checkingMargin);
    expect(checkingMargin).toBe("50px 20px");
  });
});
