import {expect, test} from '@playwright/test'
import { log } from 'console';

test('Extract Text', async ({page}) => {

page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.locator('input[name="username"]').fill('Admin1234');
await page.locator('input[name="password"]').fill('admin123');

await page.getByRole('button',{name :'Login'}).click();

const text = await page.getByText('Invalid credentials').textContent();

await expect(text).toEqual('Invalid credentials')
await expect(text).toBe('Invalid credentials');
})



test('Extract Text 2', async ({page}) => {
    
  await page.goto('https://demo.automationtesting.in/Register.html');
    
   const allTexts =  await page.locator('.form-group',{hasText:'Hobbies'})
    .locator("div div").allTextContents()
    console.log("Expected :: "+ allTexts);
    await expect(allTexts).toContain('Hockey');
    })