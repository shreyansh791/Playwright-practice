import { expect, test } from "@playwright/test"
import { NavigationPage } from "../page-objects/navigationPage"
import {formLayoutsPage } from "../page-objects/FormLayoutPage";

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
});

test('Navigate to Form Page', async ({ page }) => {
    const navigateTo = new NavigationPage(page);
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toastrPage()
    await navigateTo.toolTipPage()

});


test('Second Test', async ({ page }) => {
    const formLayoutsPageVar = new formLayoutsPage(page);
    formLayoutsPageVar.formLayoutsPage()
    await formLayoutsPageVar.submitUsingTheGridFormWithCredentialsAndSelectOption('test@gmail.com','test123','Option 2')
});

