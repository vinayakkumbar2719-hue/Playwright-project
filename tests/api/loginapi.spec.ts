import {test,expect} from '@playwright/test';
import { LoginAPI } from '../../api/login.api.ts';

test.describe('Login API tests', () => {
    test('login with valid credentials', async ({request}) => {
        let loginAPI: LoginAPI;
        loginAPI = new LoginAPI(request);
        const response = await loginAPI.login('Admin', 'admin123');
        expect(response.status()).toBe(200);
    });


});