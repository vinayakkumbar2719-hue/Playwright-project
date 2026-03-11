import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login.page';
import users from '../../test-data/users.json';


let loginPage: LoginPage;


test.use({storageState:undefined});

test.describe('Login Tests', () => {
    
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('enter valid credentials and click on login button',async({page})=>{
        await loginPage.login(users.validUser.username, users.validUser.password);

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    })

    test('login with invalid password',async({page})=>{
        await loginPage.login(users.validUser.username, users.invalidUser.password);

        await expect(page.getByText('Invalid credentials')).toBeVisible();
    })

    test('login with empty username',async({page})=>{
        await loginPage.login(users.emptyuser.username, users.validUser.password);

        await expect(page.locator('input[name="username"]').locator('xpath=../following-sibling::span')).toHaveText('Required');
    })

    test('login with empty password',async({page})=>{
        await loginPage.login(users.validUser.username, users.emptypass.password);

        await expect(page.locator('input[name="password"]').locator('xpath=../following-sibling::span')).toHaveText('Required');
    })

  });