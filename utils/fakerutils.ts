import { faker } from "@faker-js/faker";

export function generateUser():Record<string,string>{
    return {
        name: faker.person.fullName(),
        password: 'Password123',
        day: faker.number.int({min:1,max:28}).toString(),
        month: faker.date.month(),
        year: faker.number.int({min:1970,max:2005}).toString(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        company: faker.company.name(),
        address1: faker.lorem.word(),
        country: "United States",
        state: "California",
        city: "Los Angeles",
        zipcode: "90001",
        mobileNumber: faker.number.int({min:100000000,max:9999999999}).toString()
    }

}