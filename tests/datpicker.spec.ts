import { expect, test } from "@playwright/test"

test('Handle date picker', async ({ page }) => {
    await page.goto('http://localhost:4200')
    await page.getByText('Forms').click();
    //  Datepicker
    await page.getByText('Datepicker').click();

    const calendarInputField = page.getByPlaceholder('Form Picker');
    await calendarInputField.click();
    let date = new Date(); // new is a keyword 
    date.setDate(date.getDate() + 75) // selecting future date meaning 75 days after today's date 
    const expectedDate = date.getDate().toString();
    console.log("expectedDate ", expectedDate);

    const expectedMonthShort = date.toLocaleString('EN-US', { month: 'short' });
    const expectedMonthLong = date.toLocaleString('EN-US', { month: 'long' });
    console.log("expectedMonthShot ", expectedMonthShort)
    const expectedYear = date.getFullYear()
    const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

    console.log("Date to Assert ", dateToAssert);
    console.log("date is ", date.getDate());


    let calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
    console.log("calendarMonthAndYear", calendarMonthAndYear);
    const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear}`
    console.log("expectedMonthAndYear ", expectedMonthAndYear);
    while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
        await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
        calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
    }


    await page.locator('[class="day-cell ng-star-inserted"]').last().waitFor()
    console.log("expectedDate ", expectedDate);
    // getByText is partial match and not the exact match and so if you we added {exact: true} to make it exact match. 
    await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click()
    await expect(calendarInputField).toHaveValue(dateToAssert)
});
