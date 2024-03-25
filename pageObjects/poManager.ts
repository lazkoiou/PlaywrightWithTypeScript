import { Page } from "@playwright/test";
import { HerokuAppHomePage } from "./herokuApp/herokuAppHomePage";
import { AddRemoveElementsPage } from "./herokuApp/addRemoveElementsPage";

export class POManager {

    private readonly page: Page
    private readonly herokuAppHomePage: HerokuAppHomePage
    private readonly addRemoveElementsPage: AddRemoveElementsPage

    constructor(page: Page) {
        this.page = page
        this.herokuAppHomePage = new HerokuAppHomePage(this.page)
        this.addRemoveElementsPage = new AddRemoveElementsPage(this.page)
    }

    getHerokuAppHomePage() {
        return this.herokuAppHomePage    
    }

    getAddRemoveElementsPage() {
        return this.addRemoveElementsPage
    }

}