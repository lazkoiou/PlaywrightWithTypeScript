import { Page, test } from '@playwright/test'
import { POManager } from '../../pageObjects/poManager'
import { ENV_URLS } from '../../environmentConfigurations/environmentConfig'

test.describe('HerokuAppTests', async () => {
    
    test.beforeAll(async () => {      
        /* In case we want the browser to be shared among tests in this test.describe
        // Initialize the browser context and page to be shared among all tests
        const context = await browser.newContext()
        page = await context.newPage()
        */
    })

    test('Add remove elements', async ({page}) => {
        page.goto(ENV_URLS.urls.herokuHomePage)
        const poManager = new POManager(page) // TODO: Move POManager initialization to another place
        await poManager.getHerokuAppHomePage().addRemoveElementsOption.click()
    })

})