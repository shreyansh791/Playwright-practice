import {test} from "@playwright/test"

test.beforeEach('before each section', async ({page})=>{
// page.goto('http://localhost:4200');
// await page.goto('https://www.google.com');

})
test('locator syntax', async ({page})=>{
//  by tagname
await page.goto('https://www.google.com');
    // await page.locator('[name="q"]').fill('Playwright');
    await page.getByRole('search').fill('yes.. Playwright with Title...');
    // await page.getByTitle('Search').fill('Playwright with Title...');
//  by ID
page.locator('#inputEmail1');

// by class value

page.locator('.shape-rectangle');

// by Attribute
page.locator('[placeholder="Email"]')

// by partial text match
page.locator(':text("Using")');

// by exact match
page.locator(':text-is("Using the Grid")');

await page.getByText('Gmail').click();


})

test('locating child elements',async({page})=>{
await page.goto('https://demo.automationtesting.in/Register.html');
// await page.locator('#basicBootstrapForm').getByRole('radio',{name:'FeMale'}).click();
// await page.locator('#basicBootstrapForm').getByRole('radio',{name:'FeMale'}).click();
// await page.locator('#basicBootstrapForm div  label input[value="Male"]').click();

await page.locator('#basicBootstrapForm').locator('div').locator('label').locator('input[value="Male"]').click()
})

test('locating parent elements',async({page})=>{    
    await page.goto('http://localhost:4200/');
    // await page.locator('#basicBootstrapForm').getByRole('radio',{name:'FeMale'}).click();
    // await page.locator('#basicBootstrapForm').getByRole('radio',{name:'FeMale'}).click();
    // await page.locator('#basicBootstrapForm div  label input[value="Male"]').click();
    await page.getByTitle('Forms').click();
    await page.getByTitle('Form Layouts').click();
    page.locator
    await page.locator('nb-card',{hasText:'Using the Grid'}).
    getByRole('textbox',{name:'Email'}).fill('Success');

    await page.locator('nb-card',{has:page.locator('input#inputEmail1')}).
    getByRole('textbox',{name:'Email'}).fill('Success!!!!!!');
   
    await page.locator('nb-card',{hasText:'Basic form'}).
    getByRole('textbox',{name:'Email'}).fill('11111');
await page.waitForTimeout(1000);
    await page.locator('nb-card',{hasText:'Basic form'}).
    getByPlaceholder('Email').fill('22222');
    await page.waitForTimeout(1000);

    
    await page.locator('nb-card',{hasText:'Basic form'}).
    locator('#exampleInputEmail1').fill('333333');

    
    await page.locator('nb-card',{hasText:'Basic form'}).
    locator("[type='email']").fill('4444');

    

    await page.waitForTimeout(1000);
    })