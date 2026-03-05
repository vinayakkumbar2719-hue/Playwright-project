import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/login.page';

let loginPage: LoginPage;

test.describe('Login Tests', () => {
    
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('enter username and password and click on login button',async({page})=>{
        await loginPage.login('Admin', 'admin123');

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    })

    test('login with invalid password',async({page})=>{
        await loginPage.login('Admin', 'invalidPass');

        await expect(page.getByText('Invalid credentials')).toBeVisible();
    })

    test('login with empty username',async({page})=>{
        await loginPage.login('', 'admin123');

        await expect(page.locator('input[name="username"]').locator('xpath=../following-sibling::span')).toHaveText('Required');
    })

    test('login with empty password',async({page})=>{
        await loginPage.login('Admin', '');

        await expect(page.locator('input[name="password"]').locator('xpath=../following-sibling::span')).toHaveText('Required');
    })

  });