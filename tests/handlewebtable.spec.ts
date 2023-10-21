import {test,expect} from "@playwright/test"
test('Handle Web table', async ({ page }) => {
    
   await page.goto('http://localhost:4200/')
   await page.getByTitle('Tables & Data').click()
   await page.getByTitle('Smart Table').click()
   await page.getByRole('row',{name:'jack@yandex.ru'}).locator('.nb-edit')
   .click();
   await page.locator('input-editor').getByPlaceholder('ID').fill("100");
    await page.locator('.nb-checkmark').click()
});


test('Handle Filter scenario by age', async ({ page }) => {
    await page.goto('http://localhost:4200/')
    await page.getByTitle('Tables & Data').click()
   await page.getByTitle('Smart Table').click()
const allAges = ["20","30","40","100"]
const allRows = page.locator('tbody tr');
for(let age of allAges)
{
    await page.locator("input-filter input[placeholder='Age']")
.fill(age);  
await page.waitForTimeout(500);
for(let row of await allRows.all())
{ 
    if(age === '100')
    {
expect(await page.getByRole('table').textContent()).toContain('No data found');
    }else{
        expect(await allRows.locator('td').last().textContent()).toEqual(age);   
    }
}
}
});
