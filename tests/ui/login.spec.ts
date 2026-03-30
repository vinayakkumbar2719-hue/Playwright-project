import { LoginPage } from "../../pages/login.page";
import users from '../../test-data/loginData.json';
import { test, expect } from '../../fixtures/login.fixture';


test.describe('login tests',async ()=>{

    test('login with valid credentials',async ({page})=>{
        const loginPage = new LoginPage(page);

        const data = {
            "email": users.validUser.username,
            "password": users.validUser.password
        }
        await loginPage.login(data)

        await expect (page.getByText(users.validUser.User)).toBeVisible()
    })

})