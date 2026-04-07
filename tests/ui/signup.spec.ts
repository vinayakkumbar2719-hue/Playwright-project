
import {test,expect} from '../../fixtures/signup.fixture';
import {generateUser} from '../../utils/fakerutils'



test('Enter account information and create account',async({signupauth,page})=>{
    const UserData=generateUser()

    const data={
        "name": UserData.name,
        "password": UserData.password,
        "day": UserData.birth_date,
        "month": UserData.birth_month,
        "year": UserData.birth_year,
        "firstName": UserData.firstname,
        "lastName": UserData.lastname,
        "company": UserData.company,
        "address": UserData.address1,
        "country": UserData.country,
        "state": UserData.state,
        "city": UserData.city,
        "zipcode": UserData.zipcode,
        "mobileNumber": UserData.mobile_number
    }
    
    await signupauth.createAccount(data);

    await expect(page.getByText('Account Created!')).toBeVisible()
    await signupauth.clickContinue()
    await signupauth.deleteAccount()

    await expect (page.getByText('Account Deleted!')).toBeVisible()
    
})