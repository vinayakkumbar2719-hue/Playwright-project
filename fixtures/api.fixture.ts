import {test as base} from '@playwright/test';
import {LoginAPI} from '../api/login.api';

type myfixture = {
    loginAPI: LoginAPI;

}

export const test = base.extend<myfixture>({
    loginAPI: async ({request}, use) => {
        const loginAPI = new LoginAPI(request);
        await use(loginAPI);
    }
})
    
export {expect} from '@playwright/test';

