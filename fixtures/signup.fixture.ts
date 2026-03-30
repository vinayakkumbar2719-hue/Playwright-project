import { test as base, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { Signuppage } from '../pages/signup.page';

type SignupFixtures = {
  signupauth: Signuppage;
  
};

export const test = base.extend<SignupFixtures>({
  signupauth: async ({ page }, use) => {

    const signupPage = new Signuppage(page);

    const name = faker.person.fullName();
    const email = faker.internet.email();

    await signupPage.goto();
    await signupPage.navigateToSignup(name, email);

    await use(signupPage);

  }
});

export { expect };