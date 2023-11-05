import { expect, test } from "@playwright/test"
import { PageManager } from "../page-objects/pageManager";
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
});

test('Navigate to Form Page', async ({ page }) => {
    const pageManager = new PageManager(page)
    await pageManager.navigateTo().formLayoutsPage()
    await pageManager.navigateTo().datePickerPage()
    await pageManager.navigateTo().smartTablePage()
    await pageManager.navigateTo().toastrPage()
    await pageManager.navigateTo().toolTipPage()
});


test('Second Test', async ({ page }) => {
    const pageManager = new PageManager(page)
    pageManager.onFormLayoutsPage().formLayoutsPage()
    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@gmail.com', 'test123', 'Option 2')
});


test('parametrized methods', async ({ page }) => {
    const pageManager = new PageManager(page)
    pageManager.onFormLayoutsPage().formLayoutsPage()
    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@gmail.com', 'test123', 'Option 2')
    await pageManager.navigateTo().datePickerPage()
    await pageManager.onDatePickerPage().selectCommonDatePickerDateFromToday(5)
    await pageManager.onDatePickerPage().selectDatePickerWithRangeFromToday(5, 10)

});