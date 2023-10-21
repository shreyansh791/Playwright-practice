import {test,expect} from "@playwright/test"
test('Client App login', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill("anshika@gmail.com");
    await page.locator('#userPassword').fill("Iamking@000");
    await page.locator("#login").click();
    await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/product/get-all-products')

const products = page.locator('.card-body');

for(let i = 0 ; i< await products.count();i++)
{
if(await products.nth(i).locator("b").textContent() === 'adidas original')
{
    console.log("log ",await products.nth(i).locator("b").textContent());    
await products.nth(i).getByRole('button',{name:'Add To Cart'})
.click();
break;
}
}
await page.locator("button[routerlink='/dashboard/cart']").click();
await page.locator("div li").first().waitFor();
// below step is important as it shows finding out an element using the text
const isVisible = await page.locator("h3:has-text('adidas original')").isVisible();
expect(isVisible).toBeTruthy();
await page.getByRole('button',{name:'Checkout'}).click();
await page.getByPlaceholder('Select Country').pressSequentially('India',{ delay: 100 })
});
