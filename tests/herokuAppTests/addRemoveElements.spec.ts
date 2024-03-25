import { Page, expect, test } from '@playwright/test'
import { POManager } from '../../pageObjects/poManager'
import { ENV_URLS } from '../../environmentConfigurations/environmentConfig'
import { HerokuAppHomePage } from '../../pageObjects/herokuApp/herokuAppHomePage'
import { AddRemoveElementsPage } from '../../pageObjects/herokuApp/addRemoveElementsPage'

test.describe('Add / Remove elements tests- HerokuAppTests', async () => {
    
    let page: Page
    let poManager: POManager
    let herokuAppHomePage: HerokuAppHomePage
    let addRemoveElementsPage: AddRemoveElementsPage

    test.beforeEach(async ({browser}) => {      
        // Initialize the browser context and page to be shared among all tests
        const context = await browser.newContext()
        page = await context.newPage()

        poManager = new POManager(page)
        herokuAppHomePage = poManager.getHerokuAppHomePage()
        addRemoveElementsPage = poManager.getAddRemoveElementsPage()

        await page.goto(ENV_URLS.URLs.herokuAddRemoveElementsURL)

    })

    test.afterEach(async () => {
        await page.close()
    });

    test('Add elements', async () => {
        await addRemoveElementsPage.addElement()
        expect((await addRemoveElementsPage.removeElementWebElements.all()).length).toBe(1)
    })

    test('Remove elements', async () => {
        await addRemoveElementsPage.addElement()
        await addRemoveElementsPage.removeElement()
        expect((await addRemoveElementsPage.removeElementWebElements.all()).length).toBe(0)
    })

})