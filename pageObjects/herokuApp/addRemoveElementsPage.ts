import { BasePage } from "../basePage";
import { Locator, Page } from "@playwright/test";

export class AddRemoveElementsPage extends BasePage{

    readonly addElementButtonWebElement: Locator
    readonly removeElementWebElements: Locator

    constructor(page: Page) {
        super(page)
        // Locators
        this.addElementButtonWebElement = page.locator('.example button')
        this.removeElementWebElements = page.locator('#elements .added-manually')
    }

    async addElement() {
        await this.addElementButtonWebElement.click()
    }

    async removeElement() {
        await this.removeElementWebElements.click()
        await this.waitForNumberOfSeconds(1)
    }

}