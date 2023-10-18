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
    await page.locator('#Skills').selectOption('C');
    await page.waitForTimeout(3000);
    await page.selectOption('#Skills','HTML'); // this also works
    await page.waitForTimeout(3000);
    // we can use value as well instead of label, but label is preferred because label refers to visible text
  
    // const allText = await page.locator('#Skills').textContent();
  // log("allText using textContent() ", allText);
// check presence of specific option in the dropdown.

const dropdowns = await page.locator('#Skills').textContent()
await expect(dropdowns.includes('HTML')).toBeTruthy();

  //  Assertions
  const options = await page.locator('#Skills option')
  console.log("options.count. ", options);
  await expect(options).toHaveCount(78);
  // second approach 

  const options2 = await page.$$('#Skills option')
  await expect(options2.length).toBe(78);
});


test('handling dropdowns', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  await page.locator('#Skills').click();
  page.waitForTimeout(2000);
  //  await page.getByText('Android').click() // did not work 
  //  await page.locator('option[value="Android"]').click() // this also did not work
  page.waitForTimeout(2000);
})
