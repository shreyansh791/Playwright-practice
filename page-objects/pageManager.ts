import { Page, expect } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage"
import { formLayoutsPage } from "../page-objects/FormLayoutPage";
import { DatepickerPage } from "../page-objects/datePicker";

export class PageManager {

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formLayoutPage: formLayoutsPage
    private readonly datePickerPage: DatepickerPage


    constructor(page: Page) {
        this.page = page;
        this.navigationPage = new NavigationPage(this.page)
        this.formLayoutPage = new formLayoutsPage(this.page)
        this.datePickerPage = new DatepickerPage(this.page)
    }

    navigateTo() {
        return this.navigationPage
    }

    onFormLayoutsPage() {
        return this.formLayoutPage
    }

    onDatePickerPage() {
        return this.datePickerPage
    }


}
