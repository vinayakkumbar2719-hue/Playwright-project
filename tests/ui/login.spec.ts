import { LoginPage } from "../../pages/login.page";
import users from '../../test-data/loginData.json';
import { test, expect } from '../../fixtures/api.fixture';


test.describe('login tests',()=>{

    test.describe.configure({mode:'parallel'})

    test('login with valid credentials ',async ({createUserData,page})=>{
        const loginPage = new LoginPage(page);
        const {email,password,user} = createUserData

        const data = {
            "email": email,
            "password": password
        }
        await loginPage.login(data)
        await expect (page.getByText(user)).toBeVisible()
        await loginPage.deleteAccount()
        await expect (page.getByText('Account Deleted!')).toBeVisible()
    })

    test('login with invalid credentials',async ({page})=>{
        const loginPage = new LoginPage(page);
        const data = users.InvalidUser
        await loginPage.login(data)
        await expect (page.getByText('Your email or password is incorrect!')).toBeVisible()
    })


})