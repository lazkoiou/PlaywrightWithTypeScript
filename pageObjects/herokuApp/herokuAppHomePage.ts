import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class HerokuAppHomePage extends BasePage {

    readonly addRemoveElementsOption: Locator

    constructor(page: Page) {
        super(page)
        // Locators
        this.addRemoveElementsOption = page.getByRole('link', {name: "Add/Remove Elements"})
    }

}