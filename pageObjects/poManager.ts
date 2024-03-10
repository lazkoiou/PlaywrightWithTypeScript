import { Page } from "@playwright/test";
import { HerokuAppHomePage } from "./herokuApp/herokuAppHomePage";

export class POManager {

    private readonly page: Page
    private readonly herokuAppHomePage: HerokuAppHomePage

    constructor(page: Page) {
        this.page = page
        this.herokuAppHomePage = new HerokuAppHomePage(this.page)
    }

    getHerokuAppHomePage() {
        return this.herokuAppHomePage    
    }

}