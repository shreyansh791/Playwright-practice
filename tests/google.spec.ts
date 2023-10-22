import {test,expect} from "@playwright/test"
import { log } from "console";
test('Handle Tool Tip', async ({ page }) => {
  await  page.goto('http://www.google.com/');

  const text = await page.locator('a:has-text("Gmail")').textContent();
console.log("Text is ", text);
await expect(text).toContainText('Gmail');
});