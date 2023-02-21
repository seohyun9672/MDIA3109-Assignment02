import { test, devices, expect } from "@playwright/test";

test.use({
  browserName: "chromium",
  ...devices["iPad Air"],
  viewport: { width: 820, height: 1180 },
});

test.describe("The viewport for iPad Air", () => {
  test("Testing for the gap between recipes cards on iPad Air", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");

    const cardContainer = page.locator("#popular");

    const checkingFlexGap = await cardContainer.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("gap");
    });

    console.log(checkingFlexGap);
    expect(checkingFlexGap).toBe("30px");
  });
});

test.describe("The viewport for iPad Air", () => {
  test("Testing for scroll bar between categories on iPad Air", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");

    const cardContainer = page.locator("#scollbar");

    const checkingScrollbar = await cardContainer.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("overflow-x");
    });

    console.log(checkingScrollbar);
    expect(checkingScrollbar).toBe("hidden");
  });
});
