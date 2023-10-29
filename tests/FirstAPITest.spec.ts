import { test, expect } from "@playwright/test"
const loginPayload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" }
let accessToken;
test.beforeAll('first api test', async ({ request }) => {
    const loginResponse = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data: loginPayload
        }
    )
    const jsonResponse = await loginResponse.json();
    accessToken = await jsonResponse.token;
    console.log("Access Token ", accessToken);
    console.log("Login Response ", loginResponse.ok());
}
);


test('consuming Token and Login to app', async ({ page }) => {
    console.log("************************** Second Test ***************************")
    console.log("accessToken in secon test ", accessToken)
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, accessToken)
    await page.goto('https://rahulshettyacademy.com/client/')

});
