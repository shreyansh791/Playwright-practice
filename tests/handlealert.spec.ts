import {test,expect} from "@playwright/test"
test('handle alert dialog', async ({ page }) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard')
  await page.getByText('Tables & Data').click();
  await page.getByText('Smart Table').click();
await page.waitForTimeout(2000)
page.on('dialog',dialog => {
  console.log("dialog.message() ", dialog.message())
  expect(dialog.message()).toEqual('Are you sure you want to delete?');
  dialog.accept()
})

await page.getByRole('table').locator('tr',{hasText:"mdo@gmail.com"})
  .locator('.nb-trash').click();

});

  //  second Test
  // By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.
test('Handle Alert second test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  page.on('dialog', dialog =>{
    console.log(dialog.message());
    // dialog.defaultValue()
    dialog.accept();
  })
  await page.locator('#alertbtn').click();
  await page.locator('#confirmbtn').click();
  
  
});

