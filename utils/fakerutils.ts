import { faker } from "@faker-js/faker";
import { CreateAccount } from "../api/type/user.type";

export function generateUser(): CreateAccount {
    return {
        email: faker.internet.email(),
        title: faker.helpers.arrayElement(['Mr', 'Mrs']),
        name: faker.person.fullName(),
        password: 'Password123',
        birth_date: faker.number.int({min:1,max:28}).toString(),
        birth_month: faker.date.month(),
        birth_year: faker.number.int({min:1970,max:2005}).toString(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        company: faker.company.name(),
        address1: faker.lorem.word(),
        country: "United States",
        state: "California",
        city: "Los Angeles",
        zipcode: "90001",
        mobile_number: faker.number.int({min:100000000,max:9999999999}).toString()
    }

}