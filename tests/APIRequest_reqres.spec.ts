import { expect, request, test } from '@playwright/test';

const API_BASE_URL = 'https://reqres.in';
const HTTP_RESPONSE = {
    OK: 200,
    CREATED: 201
}

test('POST request example test', async () => {
    const context = await request.newContext();
    const response = await context.post(`${API_BASE_URL}/api/users`, {
        data: {
            "name": "Eugene Truuts",
            "job": "SDET"
        },
        headers: {
            "accept": "application/json"
        }
    });
    const responseJson = await response.json();
    console.log("Response in JSON format ", responseJson);
    console.log("Response body() ", await response.body());
    console.log("Response headers() ", await response.headers());;
    console.log("Response status ", await response.status());
    console.log("Response statusText() ", await response.statusText());
    console.log("Response text ", await response.text());
    console.log("Response ", responseJson.name);
    console.log("Response url ", await response.url());



    console.log(JSON.stringify(`New user added: ${responseJson.name}, ID: ${responseJson.id}`));
    expect(response.status(), {
        message: `Invalid code ${response.status()} - ${await response.text()}]`,
    }).toEqual(HTTP_RESPONSE.CREATED);
    const userId = JSON.stringify(responseJson.id);
    expect(userId, {
        message: `No user ID in response - ${await response.text()}]`,
    }).toBeDefined()
});