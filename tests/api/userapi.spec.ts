
import { CreateUserClient } from '../../api/api-client/user.client';
import {generateUser} from '../../utils/fakerutils';
import { CreateAccount } from '../../api/type/user.type';
import {test,expect} from '../../fixtures/api.fixture';
import { create } from 'node:domain';
import { loginSchema,createUserSchema } from '../../schemas/user.schema';




test('create user account',async({request})=>{
    const createUserClient=new CreateUserClient(request)
    const UserData = generateUser();
    const response = await createUserClient.createUser(UserData)
    const data = await response.json()
    createUserSchema.parse(data)
    await expect(response.status()).toBe(200)
    await expect(response.ok()).toBeTruthy()    
})


test('login with vbalid user',async({createUserData})=>{
    const {client,email,password} = createUserData;
    const response = await client.loginUser({email,password})
    const data = await response.json()
    loginSchema.parse(data)
    await expect(response.status()).toBe(200)
    await expect(response.ok()).toBeTruthy()    
})