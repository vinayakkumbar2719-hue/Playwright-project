import {test,expect} from '@playwright/test'
import { CreateUserClient } from '../../api/api-client/user.client';
import {generateUser} from '../../utils/fakerutils';
import { CreateAccount } from '../../api/type/createuser.type';




test('create user account',async({request})=>{
    const createUserClient=new CreateUserClient(request)
    const UserData = generateUser();

   const data: CreateAccount = {
        name: UserData.name,
        email: UserData.email,
        password: UserData.password,
        title: 'Mr',
        birth_date: UserData.day,
        birth_month: UserData.month,
        birth_year: UserData.year,
        firstname: UserData.firstName,
        lastname: UserData.lastName,
        company: UserData.company,
        address1: UserData.address1,
        country: UserData.country,
        zipcode: UserData.zipcode,
        state: UserData.state,
        city: UserData.city,
        mobile_number: UserData.mobileNumber
    };

    const response = await createUserClient.createUser(data)

    await expect(response.status()).toBe(200)
    await expect(response.ok()).toBeTruthy()
    

})