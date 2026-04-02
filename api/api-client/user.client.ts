import { APIRequestContext } from "@playwright/test";
import { CreateAccount,LoginAccount } from "../type/user.type";


export class CreateUserClient {
    constructor(private request: APIRequestContext) {}


    async createUser(data:CreateAccount){
        const response=await this.request.post('/api/createAccount',{form:data})
        return response
    }

    async loginUser(data:LoginAccount){
        const response=await this.request.post('/api/verifyLogin',{form:data})
        return response

    }
  


}