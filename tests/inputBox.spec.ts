import { test,expect } from "@playwright/test";
import { log } from "console";


test('inputbox', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
    await page.getByRole("textbox",{name:'First Name'}).fill('Shreyansh');
    await page.getByPlaceholder("Last Name").fill('Jain');
    await page.getByPlaceholder("Last Name").type('Jain 123');
});

test('radio button', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');  
    const element = await page.locator('input[value="Male"]');
    await element.check();
    expect(await element.isChecked()).toBeTruthy();

});
test('handling dropdown using select', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  //  label is the visibleText.
    await page.locator('#Skills').selectOption({label:'Android'});
    await page.waitForTimeout(3000);
    await page.locator('#Skills').selectOption({label:'C++'});
    await page.waitForTimeout(3000);
  
    const allText = await page.locator('#Skills').textContent();
  log("allText using textContent() ", allText);
  
});


test('handling dropdowns', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  await page.locator('#Skills').click();
  page.waitForTimeout(2000);
  //  await page.getByText('Android').click() // did not work 
  //  await page.locator('option[value="Android"]').click() // this also did not work
  page.waitForTimeout(2000);
})
