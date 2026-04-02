
import { CreateUserClient } from '../../api/api-client/user.client';
import {generateUser} from '../../utils/fakerutils';
import { CreateAccount } from '../../api/type/user.type';
import {test,expect} from '../../fixtures/api.fixture';
import { create } from 'node:domain';




test('create user account',async({request})=>{
    const createUserClient=new CreateUserClient(request)
    const UserData = generateUser();
    const response = await createUserClient.createUser(UserData)
    await expect(response.status()).toBe(200)
    await expect(response.ok()).toBeTruthy()    
})


test('login with vbalid user',async({createUserData})=>{
    const {client,email,password} = createUserData;
    const response = await client.loginUser({email,password})
    console.log(await response.text())
    await expect(response.status()).toBe(200)
    await expect(response.ok()).toBeTruthy()    
})