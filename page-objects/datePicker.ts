import { Page, expect } from "@playwright/test";
import { HelperBase } from "../utils/helperBase";

export class DatepickerPage {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }
    async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Form Picker');
        await calendarInputField.click();
        const dateToAssert = await this.selectDateInTheCalendar(5)
        await expect(calendarInputField).toHaveValue(dateToAssert)
    }
    async selectDatePickerWithRangeFromToday(startDayFromToday: number, endDayFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Range Picker')
        await calendarInputField.click();
        const dateToAssertStart = await this.selectDateInTheCalendar(startDayFromToday)
        const helperBase = new HelperBase(this.page)
        await helperBase.waitForNumberOfSeconds(5)
        const dateToAssertEnd = await this.selectDateInTheCalendar(endDayFromToday)
        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`
        console.log("dateToAssert ", dateToAssert)
        await expect(calendarInputField).toHaveValue(dateToAssert)

    }
    private async selectDateInTheCalendar(numberOfDaysFromToday: number) {
        let date = new Date(); // new is a keyword 
        date.setDate(date.getDate() + numberOfDaysFromToday) // selecting future date meaning 75 days after today's date 
        const expectedDate = date.getDate().toString();
        console.log("expectedDate ", expectedDate);

        const expectedMonthShort = date.toLocaleString('EN-US', { month: 'short' });
        const expectedMonthLong = date.toLocaleString('EN-US', { month: 'long' });
        console.log("expectedMonthShot ", expectedMonthShort)
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

        console.log("Date to Assert ", dateToAssert);
        console.log("date is ", date.getDate());


        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        console.log("calendarMonthAndYear", calendarMonthAndYear);
        const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear}`
        console.log("expectedMonthAndYear ", expectedMonthAndYear);
        while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
            calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        }
        await this.page.locator('.day-cell.ng-star-inserted').last().waitFor()
        console.log("expectedDate ", expectedDate);
        // getByText is partial match and not the exact match and so if you we added {exact: true} to make it exact match. 
        await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, { exact: true }).click()
        return dateToAssert
    }
}