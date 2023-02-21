import { test, devices, expect } from "@playwright/test";

test.use({
  browserName: "chromium",
  ...devices["iPhone XR"],
});

test.describe("The mobile viewport for iPhone XR", () => {
  test("Testing for the image width for the recipe on iPhone XR", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/recipes");

    const recipeInfo = page.locator("#image-detail");

    const checkingImageWidth = await recipeInfo.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("width");
    });

    console.log(checkingImageWidth);
    expect(checkingImageWidth).toBe("256px");
  });

  test("Testing for flex direction on iPhone XR", async ({ page }) => {
    await page.goto("http://localhost:3000/recipes");

    const detailCont = page.locator("#detail-container");

    const checkingFlexDirection = await detailCont.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("flex-direction");
    });

    console.log(checkingFlexDirection);
    expect(checkingFlexDirection).toBe("row");
  });
});
