import { test, request, expect } from '@playwright/test';

test('OrangeHRM Login API Test', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://opensource-demo.orangehrmlive.com'
  });

  const response = await apiContext.post('/web/index.php/auth/validate', {
    data: {
      username: 'Admin',
      password: 'admin123'
    }
  });

  console.log("Status:", response);
  console.log("Headers:", response.headers());

  expect(response.status()).toBe(200); // login success redirects to dashboard

  await apiContext.storageState({ path: 'storageState.json' });
});



