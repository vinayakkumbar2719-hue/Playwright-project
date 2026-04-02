import { test as base,expect } from '@playwright/test';
import { CreateUserClient } from '../api/api-client/user.client';
import {generateUser} from '../utils/fakerutils';

type CreateUserFixture = {
  createUserData: {
    client: CreateUserClient;
    email: string;
    password: string;
  };
};

export const test = base.extend<CreateUserFixture>({
  createUserData: async ({ request }, use) => {
    const createUserClient = new CreateUserClient(request);
    const data = generateUser();

    const email = data.email;
    const password = data.password;

    await createUserClient.createUser(data);

    await use({
      client: createUserClient,
      email,
      password
    });
  }
});


export { expect };