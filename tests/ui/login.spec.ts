import { LoginPage } from "../../pages/login.page";
import users from '../../test-data/loginData.json';
import { test, expect } from '../../fixtures/api.fixture';


test.describe('login tests',async ()=>{

    test('login with valid credentials',async ({createUserData,page})=>{
        const loginPage = new LoginPage(page);
        const {email,password,user} = createUserData

        const data = {
            "email": email,
            "password": password
        }
        await loginPage.login(data)
        await expect (page.getByText(user)).toBeVisible()
    })

})