import {expect, test} from "@playwright/test"


test('iframe handling', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
const frame = await page.frameLocator('#courses-iframe');
let email = await frame.locator('li:has-text("contact@rahulshettyacademy.com")').textContent();
// let email = await frame.getByText('contact@rahulshettyacademy.com').textContent();    // this also works!!!
console.log(email)
});
