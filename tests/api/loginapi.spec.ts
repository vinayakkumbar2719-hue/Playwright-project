import { test,expect } from '@playwright/test';
import { LoginAPI } from '../../api/login.api';
import users from '../../test-data/users.json';

test('OrangeHRM Login API Test', async ({request}) => {

  const login = new LoginAPI(request)
  const response =await login.login(users.validUser)

  expect(response.status()).toBe(200);

  
});



