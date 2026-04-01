import { APIRequestContext } from "@playwright/test";
import { CreateAccount } from "../type/createuser.type";


export class CreateUserClient {
    constructor(private request: APIRequestContext) {}


    async createUser(data:CreateAccount){
        const response=await this.request.post('/api/createAccount',{form:data})
        return response
    }




}