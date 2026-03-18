import { Page,chromium,Browser,BrowserContext } from "@playwright/test";
import {LoginPage} from "../pages/login.page";
import * as dotenv from 'dotenv';

dotenv.config();



async function globalsetup() {
    console.log("Global setup is running for ui");
    const browser:Browser = await chromium.launch();
    const context:BrowserContext = await browser.newContext();
    const newPage:Page = await context.newPage();
    const loginPage = new LoginPage(newPage);
    await newPage.goto(process.env.BASEURL!);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    // await newPage.waitForURL('**/dashboard/**', { timeout: 60000 });
    await context.storageState({ path: 'storageState-ui.json' });
    await browser.close();
}

export default globalsetup;



