import { test, expect } from "@playwright/test";

let urlRecipe = "http://localhost:3000/recipes";

test.beforeAll(async () => {
  console.log("Before tests");
});

test.afterAll(async () => {
  console.log("After tests");
});

test.describe("Header area", () => {
  test("The link tag", async ({ page }) => {
    await page.goto(urlRecipe);

    const linkTag = page.locator('link[rel="icon"]');
    await expect(linkTag).toHaveAttribute("href", "/imgs/favicon.png");
  });
});

test.describe("The Arrow Area", () => {
  test("Link tag and navigation", async ({ page }) => {
    await page.goto(urlRecipe);

    await expect(page.locator("a")).toHaveCount(2);
  });
});
