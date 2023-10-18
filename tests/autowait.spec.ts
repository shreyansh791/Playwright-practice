import {test} from "@playwright/test";
import { log } from "console";

test('autowait', async ({ page }) => {
    await page.goto('https://uitestingplayground.com/ajax');
    // page.waitForTimeout(5000);
    await page.locator('#ajaxButton').click();
    const text = await page.locator('.bg-success').textContent();
    log(text);
});

test('autowait2', async ({ page }) => {
    await page.goto('https://uitestingplayground.com/ajax');
    await page.locator('#ajaxButton').click();
    await page.locator('.bg-success').waitFor() // Defaults to 'visible'
    const text = await page.locator('.bg-success').allTextContents();
    log(text);
});