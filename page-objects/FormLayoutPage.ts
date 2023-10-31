import { Page } from "@playwright/test";

export class formLayoutsPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page;

    }
/**
 * 
 * @param email pass the email id
 * @param password pass the password
 * @param optionText pass the option to be selected
 */
    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', { hasText: 'Using the Grid' })
        await usingTheGridForm.getByPlaceholder('Email').fill(email);
        await usingTheGridForm.getByRole('textbox', { name: 'Password' }).fill(password);
        await usingTheGridForm.getByRole('radio',{name:optionText}).check({force:true})

    }
    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms');
        await this.page.getByText('Form Layouts').click();

    }
    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle);
        const expandedState = await groupMenuItem.getAttribute('aria-expanded');
        if (expandedState === "false") {
            await groupMenuItem.click();
        }

    }
}
