import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/login.page';


test.describe('Login Tests', () => {
    

    test.beforeEach(async ({page}) => {
        await page.goto('web/index.php/auth/login');
    });

    test('enter username and password and click on login button',async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.login('Admin', 'admin123');

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    })

  });