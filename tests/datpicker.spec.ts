import {expect, test} from "@playwright/test"

test('Handle date picker', async ({ page }) => {
await page.goto('http://localhost:4200')
await page.getByText('Forms').click();
//  Datepicker
await page.getByText('Datepicker').click();
await page.getByPlaceholder('Form Picker').click();
let date = new Date();
const expectedDate = date.getDate().toString();

const expectedMonthShot = date.toLocaleString('EN-US',{month:'short'});
console.log("expectedMonthShot ", expectedMonthShot)
const expectedYear = date.getFullYear()
const dateToAssert = `${expectedMonthShot} ${expectedDate}, ${expectedYear}`
console.log("Date to Assert ", dateToAssert);
console.log("date is ", date.getDate());
await page.locator('[class="day-cell ng-star-inserted"]').last().waitFor()
console.log("expectedDate ", expectedDate);

await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, {exact: true}).click()

 });
