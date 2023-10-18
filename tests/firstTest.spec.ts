import {  test } from "@playwright/test";
// page is one of the fixture of the playwright. other fixture is browser.
// page represents the blank page of the browser.
test.beforeEach(async({page}) => {
    console.log("Inside Before Each block");
    await page.goto('http://localhost:4200');
    await page.getByText('Forms').click();
})
// test('the first test',async ({page})=>{
//     await page.getByText('Form Layouts').click()

// })

test('click on datepicker',async ({page})=>{
    await page.getByText('Roller Shades').click()
})