import { Page } from '@playwright/test'

export class BasePage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * Waiting for time in seconds
     * @param timeInSeconds: time to wait
     */
    async waitForNumberOfSeconds(timeInSeconds: number) {
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }

}