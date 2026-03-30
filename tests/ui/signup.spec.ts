
import {test,expect} from '../../fixtures/signup.fixture';
import {generateUser} from '../../utils/fakerutils'



test('Enter account information and create account',async({signupauth,page})=>{
    const UserData=generateUser()

    const data={
        "name": UserData.name,
        "password": UserData.password,
        "day": UserData.day,
        "month": UserData.month,
        "year": UserData.year,
        "firstName": UserData.firstName,
        "lastName": UserData.lastName,
        "company": UserData.company,
        "address": UserData.address1,
        "country": UserData.country,
        "state": UserData.state,
        "city": UserData.city,
        "zipcode": UserData.zipcode,
        "mobileNumber": UserData.mobileNumber
    }
    
    await signupauth.createAccount(data);

    await expect(page.getByText('Account Created!')).toBeVisible()
    await signupauth.clickContinue()
    await signupauth.deleteAccount()

    await expect (page.getByText('Account Deleted!')).toBeVisible()
    
})