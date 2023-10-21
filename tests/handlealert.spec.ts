import {test,expect} from "@playwright/test"
test('handle alert dialog', async ({ page }) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard')
  await page.getByText('Tables & Data').click();
  await page.getByText('Smart Table').click();
await page.waitForTimeout(2000)
  await page.getByRole('table').locator('tr',{hasText:"mdo@gmail.com"})
  .locator('.nb-trash').click()

page.on('dialog',dialog => {
    console.log("dialog.message() ", dialog.message())
    expect(dialog.message()).toEqual('Are you sure you want to delete?');
    dialog.accept()
})

});
